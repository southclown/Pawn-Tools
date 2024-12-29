import * as vscode from 'vscode';
import { BuildCommands } from './commands/buildCommands';
import { sampFunctions } from './providers/sampFunctions';
import { pawnSnippets } from './providers/pawnFunctions';
import { CreatePawnFileCommand } from './commands/createPawnFile';
import { ColorViewerCommand } from './commands/colorViewerCommand';
import { ColorConverter } from './utils/colorConverter';

export function activate(context: vscode.ExtensionContext) {
    console.log('Pawn Tools extension is now active!');

    // Register commands
    BuildCommands.registerCommands(context);
    CreatePawnFileCommand.register(context);
    ColorViewerCommand.register(context);

    // Register color conversion command
    let convertColorCommand = vscode.commands.registerCommand('pawnTools.convertColor', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showWarningMessage('Please open a file to convert colors.');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);
        
        if (!text) {
            vscode.window.showWarningMessage('Please select a color code to convert.');
            return;
        }

        const colorInfo = ColorConverter.getColorInfo(text);
        if (!colorInfo) {
            vscode.window.showErrorMessage('Invalid color format. Please select a valid color code.');
            return;
        }

        const items = [
            { label: 'Hex', description: colorInfo.hex },
            { label: 'Embed', description: colorInfo.embed },
            { label: 'Gametext', description: colorInfo.gametext }
        ];

        const selected = await vscode.window.showQuickPick(items, {
            placeHolder: 'Select color format'
        });

        if (selected) {
            editor.edit(editBuilder => {
                editBuilder.replace(selection, selected.description);
            });
        }
    });

    // Register code completion provider
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        'pawn',
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.CompletionItem[] {
                const completionItems: vscode.CompletionItem[] = [];

                // Add SAMP functions
                sampFunctions.forEach(func => {
                    const completionItem = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Function);
                    completionItem.detail = func.parameters ? `(${func.parameters.join(', ')})` : '';
                    completionItem.documentation = new vscode.MarkdownString(func.description);
                    completionItem.insertText = new vscode.SnippetString(func.snippet);
                    completionItems.push(completionItem);
                });

                // Add Pawn snippets
                pawnSnippets.forEach(snippet => {
                    const completionItem = new vscode.CompletionItem(snippet.name, vscode.CompletionItemKind.Snippet);
                    completionItem.documentation = new vscode.MarkdownString(snippet.description);
                    completionItem.insertText = new vscode.SnippetString(snippet.snippet);
                    completionItems.push(completionItem);
                });

                // Add keywords
                const keywords = ['if', 'else', 'for', 'while', 'do', 'switch', 'case', 'new', 'public', 'forward', 'native', 'stock'];
                keywords.forEach(keyword => {
                    const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
                    completionItems.push(item);
                });

                return completionItems;
            }
        },
        '.' // Trigger completion when a dot is typed
    );

    // Register color completion provider
    const colorCompletionProvider = vscode.languages.registerCompletionItemProvider(
        { scheme: 'file', language: 'pawn' },
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                
                // Check if we're typing a color
                if (linePrefix.endsWith('#')) {
                    const completions: vscode.CompletionItem[] = [];
                    
                    // Get default format from settings
                    const config = vscode.workspace.getConfiguration('pawnTools');
                    const defaultFormat = config.get<string>('defaultColorFormat', 'hex');
                    
                    // Add all color names as completion items
                    ColorConverter.getAllColorNames().forEach(colorName => {
                        const completion = new vscode.CompletionItem(colorName);
                        completion.kind = vscode.CompletionItemKind.Color;
                        
                        const colorInfo = ColorConverter.getColorInfo(colorName);
                        if (colorInfo) {
                            // Set the insert text based on default format
                            switch (defaultFormat) {
                                case 'embed':
                                    completion.insertText = colorInfo.embed;
                                    break;
                                case 'gametext':
                                    completion.insertText = colorInfo.gametext;
                                    break;
                                default:
                                    completion.insertText = colorInfo.hex;
                            }
                            
                            completion.detail = `${colorInfo.hex} | ${colorInfo.embed} | ${colorInfo.gametext}`;
                            completion.documentation = new vscode.MarkdownString(
                                `**Color Formats:**\n` +
                                `- Hex: \`${colorInfo.hex}\`\n` +
                                `- Embed: \`${colorInfo.embed}\`\n` +
                                `- Gametext: \`${colorInfo.gametext}\``
                            );
                        }
                        
                        completions.push(completion);
                    });

                    return completions;
                }

                return undefined;
            }
        },
        '#' // Trigger character
    );

    // Register hover provider
    const hoverProvider = vscode.languages.registerHoverProvider('pawn', {
        provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.Hover | undefined {
            const wordRange = document.getWordRangeAtPosition(position);
            if (!wordRange) {
                return undefined;
            }
            
            const word = document.getText(wordRange);

            // Find matching SAMP function
            const sampFunction = sampFunctions.find(f => f.name === word);
            if (sampFunction) {
                const content = new vscode.MarkdownString();
                content.appendCodeblock(`${sampFunction.name}(${sampFunction.parameters?.join(', ') || ''})`, 'pawn');
                content.appendMarkdown('\n\n' + sampFunction.description);
                return new vscode.Hover(content);
            }
            
            // Find matching Pawn snippet
            const pawnSnippet = pawnSnippets.find(s => s.name === word);
            if (pawnSnippet) {
                const content = new vscode.MarkdownString();
                content.appendMarkdown(pawnSnippet.description);
                return new vscode.Hover(content);
            }
            
            return undefined;
        }
    });

    context.subscriptions.push(completionProvider, hoverProvider, convertColorCommand, colorCompletionProvider);
}

export function deactivate() {}
