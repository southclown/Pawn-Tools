import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class BuildCommands {
    private static readonly SAMP_TASK = {
        version: "2.0.0",
        label: "SA-MP Build",
        type: "shell",
        command: "${workspaceRoot}/pawno/pawncc.exe",
        args: ["${file}", "--%", "-Dgamemodes", "-;+", "-(+", "-d3"],
        group: {
            kind: "build",
            isDefault: true
        },
        isBackground: false,
        presentation: {
            reveal: "silent",
            panel: "dedicated"
        },
        problemMatcher: "$pawncc"
    };

    private static readonly OPEN_MP_TASK = {
        version: "2.0.0",
        label: "Open.MP Build",
        type: "shell",
        command: "${workspaceRoot}/qawno/pawncc.exe",
        args: ["${file}", "--%", "-Dgamemodes", "-;+", "-(+", "-d3"],
        group: {
            kind: "build",
            isDefault: true
        },
        isBackground: false,
        presentation: {
            reveal: "silent",
            panel: "dedicated"
        },
        problemMatcher: "$pawncc"
    };

    public static async registerCommands(context: vscode.ExtensionContext) {
        let buildCommand = vscode.commands.registerCommand('pawn-tools.buildFile', async () => {
            const options: vscode.QuickPickItem[] = [
                { label: 'SA-MP', description: 'Build using Pawno (SA-MP)' },
                { label: 'Open.MP', description: 'Build using Qawno (Open.MP)' }
            ];

            const choice = await vscode.window.showQuickPick(options, {
                placeHolder: 'Select build environment'
            });

            if (!choice) return;

            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('No active file to build');
                return;
            }

            const workspaceFolder = vscode.workspace.getWorkspaceFolder(editor.document.uri);
            if (!workspaceFolder) {
                vscode.window.showErrorMessage('No workspace folder found');
                return;
            }

            const vscodePath = path.join(workspaceFolder.uri.fsPath, '.vscode');
            const tasksPath = path.join(vscodePath, 'tasks.json');

            // Create .vscode folder if it doesn't exist
            if (!fs.existsSync(vscodePath)) {
                fs.mkdirSync(vscodePath);
            }

            let tasksConfig: any = {
                version: '2.0.0',
                tasks: []
            };

            // Read existing tasks.json if it exists
            if (fs.existsSync(tasksPath)) {
                try {
                    tasksConfig = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));
                } catch (error) {
                    console.error('Error reading tasks.json:', error);
                }
            }

            // Add or update the build task based on choice
            const task = choice.label === 'SA-MP' ? this.SAMP_TASK : this.OPEN_MP_TASK;
            
            // Remove existing SAMP or Open.MP tasks
            tasksConfig.tasks = tasksConfig.tasks.filter((t: any) => 
                t.label !== 'SA-MP Build' && t.label !== 'Open.MP Build'
            );
            
            // Add new task
            tasksConfig.tasks.push(task);

            // Write tasks.json
            fs.writeFileSync(tasksPath, JSON.stringify(tasksConfig, null, 4));

            vscode.window.showInformationMessage(`Build configuration updated for ${choice.label}`);
        });

        context.subscriptions.push(buildCommand);
    }
}
