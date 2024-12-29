export interface PawnColor {
    name: string;
    embed: string;    // {FFFFFF}
    hex: string;      // #FFFFFF
    gametext: string; // ~r~
    description: string;
}

export const pawnColors: PawnColor[] = [
    // Basic Colors
    {
        name: "Black",
        embed: "{000000}",
        hex: "#000000",
        gametext: "~n~",
        description: "Pure black"
    },
    {
        name: "White",
        embed: "{FFFFFF}",
        hex: "#FFFFFF",
        gametext: "~w~",
        description: "Pure white"
    },
    {
        name: "Red",
        embed: "{FF0000}",
        hex: "#FF0000",
        gametext: "~r~",
        description: "Pure red"
    },
    {
        name: "Green",
        embed: "{00FF00}",
        hex: "#00FF00",
        gametext: "~g~",
        description: "Pure green"
    },
    {
        name: "Blue",
        embed: "{0000FF}",
        hex: "#0000FF",
        gametext: "~b~",
        description: "Pure blue"
    },
    {
        name: "Yellow",
        embed: "{FFFF00}",
        hex: "#FFFF00",
        gametext: "~y~",
        description: "Pure yellow"
    },
    // Red Shades
    {
        name: "Dark Red",
        embed: "{8B0000}",
        hex: "#8B0000",
        gametext: "~r~",
        description: "Dark red shade"
    },
    {
        name: "Crimson",
        embed: "{DC143C}",
        hex: "#DC143C",
        gametext: "~r~",
        description: "Deep purplish red"
    },
    {
        name: "Indian Red",
        embed: "{CD5C5C}",
        hex: "#CD5C5C",
        gametext: "~r~",
        description: "Medium red with brown tinge"
    },
    {
        name: "Light Coral",
        embed: "{F08080}",
        hex: "#F08080",
        gametext: "~r~",
        description: "Light pinkish red"
    },
    // Orange Shades
    {
        name: "Orange Red",
        embed: "{FF4500}",
        hex: "#FF4500",
        gametext: "~o~",
        description: "Bright reddish orange"
    },
    {
        name: "Dark Orange",
        embed: "{FF8C00}",
        hex: "#FF8C00",
        gametext: "~o~",
        description: "Deep orange"
    },
    {
        name: "Orange",
        embed: "{FFA500}",
        hex: "#FFA500",
        gametext: "~o~",
        description: "Pure orange"
    },
    {
        name: "Gold",
        embed: "{FFD700}",
        hex: "#FFD700",
        gametext: "~y~",
        description: "Golden yellow"
    },
    // Yellow Shades
    {
        name: "Light Yellow",
        embed: "{FFFFE0}",
        hex: "#FFFFE0",
        gametext: "~y~",
        description: "Pale yellow"
    },
    {
        name: "Khaki",
        embed: "{F0E68C}",
        hex: "#F0E68C",
        gametext: "~y~",
        description: "Light brownish yellow"
    },
    // Green Shades
    {
        name: "Dark Green",
        embed: "{006400}",
        hex: "#006400",
        gametext: "~g~",
        description: "Deep green"
    },
    {
        name: "Forest Green",
        embed: "{228B22}",
        hex: "#228B22",
        gametext: "~g~",
        description: "Dark natural green"
    },
    {
        name: "Lime Green",
        embed: "{32CD32}",
        hex: "#32CD32",
        gametext: "~g~",
        description: "Bright lime green"
    },
    {
        name: "Light Green",
        embed: "{90EE90}",
        hex: "#90EE90",
        gametext: "~g~",
        description: "Pale green"
    },
    {
        name: "Pale Green",
        embed: "{98FB98}",
        hex: "#98FB98",
        gametext: "~g~",
        description: "Very light green"
    },
    // Cyan Shades
    {
        name: "Teal",
        embed: "{008080}",
        hex: "#008080",
        gametext: "~h~",
        description: "Dark cyan"
    },
    {
        name: "Dark Cyan",
        embed: "{008B8B}",
        hex: "#008B8B",
        gametext: "~h~",
        description: "Deep blue-green"
    },
    {
        name: "Aqua",
        embed: "{00FFFF}",
        hex: "#00FFFF",
        gametext: "~h~",
        description: "Pure cyan"
    },
    {
        name: "Light Cyan",
        embed: "{E0FFFF}",
        hex: "#E0FFFF",
        gametext: "~h~",
        description: "Pale cyan"
    },
    // Blue Shades
    {
        name: "Navy",
        embed: "{000080}",
        hex: "#000080",
        gametext: "~b~",
        description: "Dark blue"
    },
    {
        name: "Royal Blue",
        embed: "{4169E1}",
        hex: "#4169E1",
        gametext: "~b~",
        description: "Deep blue with purple tinge"
    },
    {
        name: "Dodger Blue",
        embed: "{1E90FF}",
        hex: "#1E90FF",
        gametext: "~b~",
        description: "Bright blue"
    },
    {
        name: "Deep Sky Blue",
        embed: "{00BFFF}",
        hex: "#00BFFF",
        gametext: "~b~",
        description: "Bright sky blue"
    },
    {
        name: "Light Blue",
        embed: "{ADD8E6}",
        hex: "#ADD8E6",
        gametext: "~h~",
        description: "Pale blue"
    },
    // Purple Shades
    {
        name: "Dark Purple",
        embed: "{301934}",
        hex: "#301934",
        gametext: "~p~",
        description: "Deep purple"
    },
    {
        name: "Purple",
        embed: "{800080}",
        hex: "#800080",
        gametext: "~p~",
        description: "Pure purple"
    },
    {
        name: "Medium Purple",
        embed: "{9370DB}",
        hex: "#9370DB",
        gametext: "~p~",
        description: "Medium shade purple"
    },
    {
        name: "Orchid",
        embed: "{DA70D6}",
        hex: "#DA70D6",
        gametext: "~p~",
        description: "Light purple"
    },
    // Pink Shades
    {
        name: "Deep Pink",
        embed: "{FF1493}",
        hex: "#FF1493",
        gametext: "~p~",
        description: "Deep pink"
    },
    {
        name: "Hot Pink",
        embed: "{FF69B4}",
        hex: "#FF69B4",
        gametext: "~p~",
        description: "Bright pink"
    },
    {
        name: "Pink",
        embed: "{FFC0CB}",
        hex: "#FFC0CB",
        gametext: "~p~",
        description: "Light pink"
    },
    {
        name: "Light Pink",
        embed: "{FFB6C1}",
        hex: "#FFB6C1",
        gametext: "~p~",
        description: "Pale pink"
    },
    // Brown Shades
    {
        name: "Maroon",
        embed: "{800000}",
        hex: "#800000",
        gametext: "~r~",
        description: "Dark brownish red"
    },
    {
        name: "Brown",
        embed: "{A52A2A}",
        hex: "#A52A2A",
        gametext: "~r~",
        description: "Pure brown"
    },
    {
        name: "Saddle Brown",
        embed: "{8B4513}",
        hex: "#8B4513",
        gametext: "~r~",
        description: "Dark brown"
    },
    {
        name: "Sienna",
        embed: "{A0522D}",
        hex: "#A0522D",
        gametext: "~r~",
        description: "Reddish brown"
    },
    {
        name: "Chocolate",
        embed: "{D2691E}",
        hex: "#D2691E",
        gametext: "~r~",
        description: "Medium brown"
    },
    {
        name: "Peru",
        embed: "{CD853F}",
        hex: "#CD853F",
        gametext: "~r~",
        description: "Light brown"
    },
    {
        name: "Tan",
        embed: "{D2B48C}",
        hex: "#D2B48C",
        gametext: "~y~",
        description: "Pale brown"
    },
    // Gray Shades
    {
        name: "Dark Gray",
        embed: "{A9A9A9}",
        hex: "#A9A9A9",
        gametext: "~l~",
        description: "Dark gray"
    },
    {
        name: "Gray",
        embed: "{808080}",
        hex: "#808080",
        gametext: "~l~",
        description: "Medium gray"
    },
    {
        name: "Light Gray",
        embed: "{D3D3D3}",
        hex: "#D3D3D3",
        gametext: "~l~",
        description: "Light gray"
    },
    {
        name: "Gainsboro",
        embed: "{DCDCDC}",
        hex: "#DCDCDC",
        gametext: "~l~",
        description: "Very light gray"
    },
    // Special Colors
    {
        name: "Ivory",
        embed: "{FFFFF0}",
        hex: "#FFFFF0",
        gametext: "~w~",
        description: "Creamy white"
    },
    {
        name: "Beige",
        embed: "{F5F5DC}",
        hex: "#F5F5DC",
        gametext: "~w~",
        description: "Light grayish brown"
    },
    {
        name: "Wheat",
        embed: "{F5DEB3}",
        hex: "#F5DEB3",
        gametext: "~y~",
        description: "Light brownish yellow"
    },
    {
        name: "Coral",
        embed: "{FF7F50}",
        hex: "#FF7F50",
        gametext: "~o~",
        description: "Light reddish orange"
    },
    {
        name: "Tomato",
        embed: "{FF6347}",
        hex: "#FF6347",
        gametext: "~r~",
        description: "Reddish orange"
    },
    // Metallic Colors
    {
        name: "Silver",
        embed: "{C0C0C0}",
        hex: "#C0C0C0",
        gametext: "~w~",
        description: "Metallic silver"
    },
    {
        name: "Bronze",
        embed: "{CD7F32}",
        hex: "#CD7F32",
        gametext: "~o~",
        description: "Metallic bronze"
    },
    {
        name: "Copper",
        embed: "{B87333}",
        hex: "#B87333",
        gametext: "~o~",
        description: "Metallic copper"
    },
    {
        name: "Platinum",
        embed: "{E5E4E2}",
        hex: "#E5E4E2",
        gametext: "~w~",
        description: "Metallic platinum"
    },
    // Neon Colors
    {
        name: "Neon Pink",
        embed: "{FF6EC7}",
        hex: "#FF6EC7",
        gametext: "~p~",
        description: "Bright neon pink"
    },
    {
        name: "Neon Green",
        embed: "{39FF14}",
        hex: "#39FF14",
        gametext: "~g~",
        description: "Bright neon green"
    },
    {
        name: "Neon Blue",
        embed: "{1F51FF}",
        hex: "#1F51FF",
        gametext: "~b~",
        description: "Bright neon blue"
    },
    {
        name: "Neon Orange",
        embed: "{FF9933}",
        hex: "#FF9933",
        gametext: "~o~",
        description: "Bright neon orange"
    },
    {
        name: "Neon Yellow",
        embed: "{FFFF33}",
        hex: "#FFFF33",
        gametext: "~y~",
        description: "Bright neon yellow"
    },
    // Pastel Colors
    {
        name: "Pastel Pink",
        embed: "{FFB5C5}",
        hex: "#FFB5C5",
        gametext: "~p~",
        description: "Soft pastel pink"
    },
    {
        name: "Pastel Blue",
        embed: "{B5D3FF}",
        hex: "#B5D3FF",
        gametext: "~b~",
        description: "Soft pastel blue"
    },
    {
        name: "Pastel Green",
        embed: "{B5FFB5}",
        hex: "#B5FFB5",
        gametext: "~g~",
        description: "Soft pastel green"
    },
    {
        name: "Pastel Yellow",
        embed: "{FFFFB5}",
        hex: "#FFFFB5",
        gametext: "~y~",
        description: "Soft pastel yellow"
    },
    {
        name: "Pastel Purple",
        embed: "{E6B5FF}",
        hex: "#E6B5FF",
        gametext: "~p~",
        description: "Soft pastel purple"
    },
    {
        name: "Pastel Orange",
        embed: "{FFD1B5}",
        hex: "#FFD1B5",
        gametext: "~o~",
        description: "Soft pastel orange"
    },
    // Earth Tones
    {
        name: "Terra Cotta",
        embed: "{E2725B}",
        hex: "#E2725B",
        gametext: "~r~",
        description: "Earthy reddish brown"
    },
    {
        name: "Desert Sand",
        embed: "{EDC9AF}",
        hex: "#EDC9AF",
        gametext: "~y~",
        description: "Light sandy brown"
    },
    {
        name: "Moss Green",
        embed: "{8A9A5B}",
        hex: "#8A9A5B",
        gametext: "~g~",
        description: "Natural moss green"
    },
    {
        name: "Clay",
        embed: "{B87333}",
        hex: "#B87333",
        gametext: "~o~",
        description: "Natural clay color"
    },
    // Ocean Colors
    {
        name: "Sea Blue",
        embed: "{006994}",
        hex: "#006994",
        gametext: "~b~",
        description: "Deep sea blue"
    },
    {
        name: "Aquamarine",
        embed: "{7FFFD4}",
        hex: "#7FFFD4",
        gametext: "~h~",
        description: "Light blue-green"
    },
    {
        name: "Ocean Green",
        embed: "{48D1CC}",
        hex: "#48D1CC",
        gametext: "~h~",
        description: "Medium turquoise"
    },
    {
        name: "Coral Blue",
        embed: "{5D8AA8}",
        hex: "#5D8AA8",
        gametext: "~b~",
        description: "Grayish blue"
    },
    // Sky Colors
    {
        name: "Sky Blue",
        embed: "{87CEEB}",
        hex: "#87CEEB",
        gametext: "~b~",
        description: "Light sky blue"
    },
    {
        name: "Azure",
        embed: "{007FFF}",
        hex: "#007FFF",
        gametext: "~b~",
        description: "Pure sky blue"
    },
    {
        name: "Celeste",
        embed: "{B2FFFF}",
        hex: "#B2FFFF",
        gametext: "~h~",
        description: "Light cyan blue"
    },
    // Sunset Colors
    {
        name: "Sunset Orange",
        embed: "{FD5E53}",
        hex: "#FD5E53",
        gametext: "~o~",
        description: "Bright sunset orange"
    },
    {
        name: "Sunset Pink",
        embed: "{FD6C9E}",
        hex: "#FD6C9E",
        gametext: "~p~",
        description: "Bright sunset pink"
    },
    {
        name: "Sunset Purple",
        embed: "{9B30FF}",
        hex: "#9B30FF",
        gametext: "~p~",
        description: "Deep sunset purple"
    },
    // Gem Colors
    {
        name: "Ruby",
        embed: "{E0115F}",
        hex: "#E0115F",
        gametext: "~r~",
        description: "Deep red gem"
    },
    {
        name: "Sapphire",
        embed: "{0F52BA}",
        hex: "#0F52BA",
        gametext: "~b~",
        description: "Deep blue gem"
    },
    {
        name: "Emerald",
        embed: "{50C878}",
        hex: "#50C878",
        gametext: "~g~",
        description: "Deep green gem"
    },
    {
        name: "Amethyst",
        embed: "{9966CC}",
        hex: "#9966CC",
        gametext: "~p~",
        description: "Purple gem"
    },
    {
        name: "Topaz",
        embed: "{FFC87C}",
        hex: "#FFC87C",
        gametext: "~y~",
        description: "Golden yellow gem"
    },
    // Food Colors
    {
        name: "Cherry",
        embed: "{DE3163}",
        hex: "#DE3163",
        gametext: "~r~",
        description: "Cherry red"
    },
    {
        name: "Grape",
        embed: "{6F2DA8}",
        hex: "#6F2DA8",
        gametext: "~p~",
        description: "Deep grape purple"
    },
    {
        name: "Lime",
        embed: "{BFFF00}",
        hex: "#BFFF00",
        gametext: "~g~",
        description: "Bright lime"
    },
    {
        name: "Lemon",
        embed: "{FFF700}",
        hex: "#FFF700",
        gametext: "~y~",
        description: "Bright lemon"
    },
    {
        name: "Blueberry",
        embed: "{4F86F7}",
        hex: "#4F86F7",
        gametext: "~b~",
        description: "Blueberry blue"
    },
    {
        name: "Strawberry",
        embed: "{FC5A8D}",
        hex: "#FC5A8D",
        gametext: "~r~",
        description: "Strawberry pink"
    },
    // Vibrant Colors
    {
        name: "Electric Blue",
        embed: "{7DF9FF}",
        hex: "#7DF9FF",
        gametext: "~b~",
        description: "Bright electric blue"
    },
    {
        name: "Magenta",
        embed: "{FF00FF}",
        hex: "#FF00FF",
        gametext: "~p~",
        description: "Pure magenta"
    },
    {
        name: "Chartreuse",
        embed: "{7FFF00}",
        hex: "#7FFF00",
        gametext: "~g~",
        description: "Yellow-green"
    },
    {
        name: "Electric Purple",
        embed: "{BF00FF}",
        hex: "#BF00FF",
        gametext: "~p~",
        description: "Bright electric purple"
    },
    // Dark Rich Colors
    {
        name: "Wine Red",
        embed: "{722F37}",
        hex: "#722F37",
        gametext: "~r~",
        description: "Deep wine red"
    },
    {
        name: "Forest Night",
        embed: "{254117}",
        hex: "#254117",
        gametext: "~g~",
        description: "Very dark forest green"
    },
    {
        name: "Midnight Blue",
        embed: "{191970}",
        hex: "#191970",
        gametext: "~b~",
        description: "Very dark blue"
    },
    {
        name: "Dark Violet",
        embed: "{9400D3}",
        hex: "#9400D3",
        gametext: "~p~",
        description: "Deep violet"
    }
];
