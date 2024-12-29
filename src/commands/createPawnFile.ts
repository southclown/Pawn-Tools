import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { gamemodeTemplate, filterscriptTemplate, includeTemplate } from '../templates/pawnTemplates';

interface PawnFileOption {
    label: string;
    description: string;
    template: string | ((name: string) => string);
    extension: string;
    folder: string;
}

export class CreatePawnFileCommand {
    private static readonly options: PawnFileOption[] = [
        {
            label: "Gamemode",
            description: "Create a new gamemode file",
            template: gamemodeTemplate,
            extension: ".pwn",
            folder: "gamemodes"
        },
        {
            label: "Filterscript",
            description: "Create a new filterscript file",
            template: filterscriptTemplate,
            extension: ".pwn",
            folder: "filterscripts"
        },
        {
            label: "Include",
            description: "Create a new include file",
            template: includeTemplate,
            extension: ".inc",
            folder: "pawno/include"
        }
    ];

    public static register(context: vscode.ExtensionContext) {
        const command = vscode.commands.registerCommand('pawnTools.createPawnFile', async () => {
            // Get workspace folder
            const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
            if (!workspaceFolder) {
                vscode.window.showErrorMessage('Please open a workspace first');
                return;
            }

            // Show quick pick to select file type
            const selected = await vscode.window.showQuickPick(CreatePawnFileCommand.options, {
                placeHolder: 'Select the type of Pawn file to create'
            });

            if (!selected) {
                return;
            }

            // Get filename from user
            const fileName = await vscode.window.showInputBox({
                prompt: `Enter name for new ${selected.label}`,
                placeHolder: selected.label === 'Include' ? 'myinclude' : 'gamemode1'
            });

            if (!fileName) {
                return;
            }

            // Create full path
            const folderPath = path.join(workspaceFolder.uri.fsPath, selected.folder);
            const fullPath = path.join(folderPath, fileName + selected.extension);

            // Create directory if it doesn't exist
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, { recursive: true });
            }

            // Check if file already exists
            if (fs.existsSync(fullPath)) {
                const overwrite = await vscode.window.showWarningMessage(
                    `File ${fileName}${selected.extension} already exists. Do you want to overwrite it?`,
                    'Yes',
                    'No'
                );
                if (overwrite !== 'Yes') {
                    return;
                }
            }

            try {
                // Create file with template
                let content = typeof selected.template === 'function' 
                    ? selected.template(fileName)
                    : selected.template;

                fs.writeFileSync(fullPath, content);

                // Open the file
                const document = await vscode.workspace.openTextDocument(fullPath);
                await vscode.window.showTextDocument(document);

                vscode.window.showInformationMessage(`Created new ${selected.label}: ${fileName}${selected.extension}`);
            } catch (err) {
                vscode.window.showErrorMessage(`Error creating file: ${err}`);
            }
        });

        context.subscriptions.push(command);
    }
}
