import * as vscode from 'vscode';
import { pawnColors } from '../data/pawnColors';
import { ColorConverter } from '../utils/colorConverter';

export class ColorViewerCommand {
    private static currentPanel: vscode.WebviewPanel | undefined;

    public static register(context: vscode.ExtensionContext): void {
        // Register color viewer commands
        context.subscriptions.push(
            vscode.commands.registerCommand('pawnTools.viewEmbedColors', () => {
                this.showColorViewer('embed');
            })
        );

        context.subscriptions.push(
            vscode.commands.registerCommand('pawnTools.viewHexColors', () => {
                this.showColorViewer('hex');
            })
        );

        context.subscriptions.push(
            vscode.commands.registerCommand('pawnTools.viewGametextColors', () => {
                this.showColorViewer('gametext');
            })
        );

        // Register color conversion provider
        context.subscriptions.push(
            vscode.languages.registerCompletionItemProvider(
                { scheme: 'file', language: 'pawn' },
                {
                    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                        const linePrefix = document.lineAt(position).text.substr(0, position.character);
                        
                        // Check if we're typing a color
                        if (linePrefix.endsWith('#')) {
                            const completions: vscode.CompletionItem[] = [];
                            
                            // Add all color names as completion items
                            ColorConverter.getAllColorNames().forEach(colorName => {
                                const completion = new vscode.CompletionItem(colorName);
                                completion.kind = vscode.CompletionItemKind.Color;
                                completion.detail = ColorConverter.convertToHex(colorName) || undefined;
                                completion.documentation = new vscode.MarkdownString(
                                    `Converts to:\n` +
                                    `- Hex: ${completion.detail}\n` +
                                    `- Embed: ${ColorConverter.convertToEmbed(completion.detail!)}\n` +
                                    `- Gametext: ${ColorConverter.convertToGametext(completion.detail!)}`
                                );
                                completions.push(completion);
                            });

                            return completions;
                        }

                        return undefined;
                    }
                },
                '#' // Trigger character
            )
        );
    }

    private static showColorViewer(format: 'embed' | 'hex' | 'gametext'): void {
        if (this.currentPanel) {
            this.currentPanel.reveal();
            return;
        }

        this.currentPanel = vscode.window.createWebviewPanel(
            'pawnColorViewer',
            `Pawn ${format.charAt(0).toUpperCase() + format.slice(1)} Colors`,
            vscode.ViewColumn.One,
            {}
        );

        this.currentPanel.webview.html = this.getWebviewContent(format);

        this.currentPanel.onDidDispose(
            () => {
                this.currentPanel = undefined;
            },
            undefined
        );
    }

    private static getWebviewContent(format: 'embed' | 'hex' | 'gametext'): string {
        const formatTitle = {
            'embed': 'Embed Format {FFFFFF}',
            'hex': 'Hex Format #FFFFFF',
            'gametext': 'Gametext Format ~r~'
        };

        const getColorValue = (color: any, format: string) => {
            switch (format) {
                case 'embed': return color.embed;
                case 'hex': return color.hex;
                case 'gametext': return color.gametext;
                default: return '';
            }
        };

        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pawn Colors - ${formatTitle[format]}</title>
                <style>
                    body {
                        padding: 20px;
                        font-family: var(--vscode-font-family);
                        color: var(--vscode-foreground);
                        background-color: var(--vscode-editor-background);
                    }
                    .color-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                        gap: 20px;
                        margin-top: 20px;
                    }
                    .color-item {
                        border: 1px solid var(--vscode-panel-border);
                        border-radius: 4px;
                        padding: 10px;
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                    }
                    .color-preview {
                        height: 40px;
                        border-radius: 4px;
                        margin-bottom: 8px;
                    }
                    .color-name {
                        font-weight: bold;
                        color: var(--vscode-editor-foreground);
                    }
                    .color-value {
                        font-family: monospace;
                        background-color: var(--vscode-textBlockQuote-background);
                        padding: 4px 8px;
                        border-radius: 4px;
                    }
                    .color-description {
                        font-size: 0.9em;
                        color: var(--vscode-descriptionForeground);
                    }
                    .category-header {
                        margin-top: 30px;
                        margin-bottom: 15px;
                        padding-bottom: 5px;
                        border-bottom: 1px solid var(--vscode-panel-border);
                        color: var(--vscode-editor-foreground);
                    }
                </style>
            </head>
            <body>
                <h1>Pawn Colors - ${formatTitle[format]}</h1>
                <p>Click on any color value to copy it to your clipboard.</p>
                ${this.generateColorCategories(format)}
                <script>
                    // Add click-to-copy functionality
                    document.querySelectorAll('.color-value').forEach(element => {
                        element.style.cursor = 'pointer';
                        element.title = 'Click to copy';
                        element.onclick = function() {
                            const text = this.textContent;
                            navigator.clipboard.writeText(text).then(() => {
                                const original = this.textContent;
                                this.textContent = 'Copied!';
                                setTimeout(() => {
                                    this.textContent = original;
                                }, 1000);
                            });
                        };
                    });
                </script>
            </body>
            </html>
        `;
    }

    private static generateColorCategories(format: string): string {
        const categories = new Map<string, typeof pawnColors>();
        
        // Group colors by category
        pawnColors.forEach(color => {
            const category = this.getColorCategory(color);
            if (!categories.has(category)) {
                categories.set(category, []);
            }
            categories.get(category)!.push(color);
        });

        // Generate HTML for each category
        let html = '';
        categories.forEach((colors, category) => {
            html += `
                <h2 class="category-header">${category}</h2>
                <div class="color-grid">
                    ${colors.map(color => this.generateColorItem(color, format)).join('')}
                </div>
            `;
        });

        return html;
    }

    private static getColorCategory(color: any): string {
        // Extract category from comments in pawnColors.ts
        const name = color.name.toLowerCase();
        if (name.includes('neon')) return 'Neon Colors';
        if (name.includes('pastel')) return 'Pastel Colors';
        if (name.includes('metallic') || name.includes('silver') || name.includes('gold') || name.includes('bronze')) return 'Metallic Colors';
        if (name.includes('dark')) return 'Dark Colors';
        if (name.includes('light')) return 'Light Colors';
        return 'Basic Colors';
    }

    private static generateColorItem(color: any, format: string): string {
        const colorValue = format === 'embed' ? color.embed :
                         format === 'hex' ? color.hex :
                         color.gametext;

        return `
            <div class="color-item">
                <div class="color-preview" style="background-color: ${color.hex}"></div>
                <div class="color-name">${color.name}</div>
                <div class="color-value">${colorValue}</div>
                <div class="color-description">${color.description}</div>
            </div>
        `;
    }
}
