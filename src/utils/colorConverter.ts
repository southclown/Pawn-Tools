import { pawnColors } from '../data/pawnColors';

export class ColorConverter {
    private static colorMap: Map<string, string> = new Map();
    private static initialized: boolean = false;

    private static initialize() {
        if (this.initialized) return;

        // Add all colors from pawnColors with variations
        pawnColors.forEach(color => {
            // Original name
            this.colorMap.set(color.name.toLowerCase(), color.hex);
            
            // Without spaces
            this.colorMap.set(color.name.toLowerCase().replace(/\s+/g, ''), color.hex);
            
            // With hyphens
            this.colorMap.set(color.name.toLowerCase().replace(/\s+/g, '-'), color.hex);
            
            // With hash prefix
            this.colorMap.set(`#${color.name.toLowerCase().replace(/\s+/g, '')}`, color.hex);
            
            // Special handling for basic colors
            if (color.name.toLowerCase() === 'red' || 
                color.name.toLowerCase() === 'blue' || 
                color.name.toLowerCase() === 'green' || 
                color.name.toLowerCase() === 'yellow' || 
                color.name.toLowerCase() === 'purple' || 
                color.name.toLowerCase() === 'orange' || 
                color.name.toLowerCase() === 'black' || 
                color.name.toLowerCase() === 'white' || 
                color.name.toLowerCase() === 'gray') {
                // Add with hash prefix
                this.colorMap.set(`#${color.name.toLowerCase()}`, color.hex);
            }
        });

        this.initialized = true;
    }

    public static convertToHex(input: string): string | null {
        this.initialize();

        // If input is already a valid hex color, return it
        if (/^#[0-9A-Fa-f]{6}$/.test(input)) {
            return input.toUpperCase();
        }

        // Remove '#' if present and convert to lowercase
        const colorName = input.replace('#', '').toLowerCase();

        // Try to get the color from the map
        const hexColor = this.colorMap.get(colorName);
        if (hexColor) {
            return hexColor.toUpperCase();
        }

        // Try to find partial matches
        for (const [key, value] of this.colorMap.entries()) {
            if (key.includes(colorName)) {
                return value.toUpperCase();
            }
        }

        return null;
    }

    public static convertToEmbed(hex: string): string {
        // Remove '#' if present and convert to uppercase
        return `{${hex.replace('#', '').toUpperCase()}}`;
    }

    public static convertToGametext(hex: string): string {
        this.initialize();
        
        // Find the exact matching color in pawnColors
        const color = pawnColors.find(c => c.hex.toLowerCase() === hex.toLowerCase());
        if (color) {
            return color.gametext;
        }

        // If no exact match, find the closest matching basic color
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        // Define basic colors with their gametext codes
        const basicColors = [
            { r: 0, g: 0, b: 0, code: '~n~' },      // Black
            { r: 255, g: 255, b: 255, code: '~w~' }, // White
            { r: 255, g: 0, b: 0, code: '~r~' },     // Red
            { r: 0, g: 255, b: 0, code: '~g~' },     // Green
            { r: 0, g: 0, b: 255, code: '~b~' },     // Blue
            { r: 255, g: 255, b: 0, code: '~y~' },   // Yellow
            { r: 128, g: 0, b: 128, code: '~p~' },   // Purple
            { r: 255, g: 165, b: 0, code: '~o~' },   // Orange
            { r: 128, g: 128, b: 128, code: '~l~' }  // Gray
        ];

        // Find closest basic color using color distance formula
        let closestColor = basicColors[0];
        let minDistance = Number.MAX_VALUE;

        basicColors.forEach(basicColor => {
            const distance = Math.sqrt(
                Math.pow(r - basicColor.r, 2) +
                Math.pow(g - basicColor.g, 2) +
                Math.pow(b - basicColor.b, 2)
            );

            if (distance < minDistance) {
                minDistance = distance;
                closestColor = basicColor;
            }
        });

        return closestColor.code;
    }

    public static isValidHexColor(input: string): boolean {
        return /^#[0-9A-Fa-f]{6}$/.test(input);
    }

    public static getAllColorNames(): string[] {
        this.initialize();
        return Array.from(new Set(pawnColors.map(color => color.name)));
    }

    public static getColorInfo(colorName: string): { hex: string, embed: string, gametext: string } | null {
        this.initialize();
        
        const hex = this.convertToHex(colorName);
        if (!hex) return null;

        return {
            hex: hex,
            embed: this.convertToEmbed(hex),
            gametext: this.convertToGametext(hex)
        };
    }
}
