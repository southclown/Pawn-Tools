# 🎮 Pawn Tools for Open.MP and SA-MP

<div align="center">

![Version](https://img.shields.io/badge/version-1.1.5-blue.svg?cacheSeconds=2592000)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Downloads](https://img.shields.io/visual-studio-marketplace/d/southclownlienhart.pawn-tools-omp-samp)
![Rating](https://img.shields.io/visual-studio-marketplace/r/southclownlienhart.pawn-tools-omp-samp)
![CI/CD](https://github.com/southclown/Pawn-Tools/workflows/CI%2FCD/badge.svg)
![GitHub issues](https://img.shields.io/github/issues/southclown/Pawn-Tools)
![GitHub pull requests](https://img.shields.io/github/issues-pr/southclown/Pawn-Tools)
![GitHub last commit](https://img.shields.io/github/last-commit/southclown/Pawn-Tools)

<img src="https://raw.githubusercontent.com/southclown/Pawn-Tools/main/images/logo.png" alt="Pawn Tools Logo" width="150"/>

</div>

> A comprehensive toolset for SA-MP and Open.MP Pawn development, featuring IntelliSense, snippets, build tools, and color utilities.

[GitHub Repository](https://github.com/southclown/Pawn-Tools) | [Report Issues](https://github.com/southclown/Pawn-Tools/issues) | [Request Features](https://github.com/southclown/Pawn-Tools/issues)

## 🌟 Highlights

- 🎨 **Advanced Color Management**: Convert and preview colors in multiple formats
- 🚀 **Smart IntelliSense**: Context-aware code completion and documentation
- 🛠️ **Integrated Build Tools**: Compile directly from VS Code
- 📝 **Rich Snippets**: Quick access to common code patterns
- 🎯 **SA-MP & Open.MP Support**: Compatible with both platforms

## ✨ Features

### 🎨 Color Management
- **Color Viewer**: View colors in three formats:
  - Embed Format: `{FFFFFF}`
  - Hex Format: `#FFFFFF`
  - Gametext Format: `~r~`
- **Color Conversion**: Convert between different color formats
- **Smart Auto-completion**: Type `#` to get color suggestions
- **100+ Predefined Colors**: Including basic, neon, pastel, metallic, and more

### 🛠️ Development Tools
- **IntelliSense Support**: Get code suggestions and documentation
- **Code Snippets**: Quick access to common Pawn code patterns
- **Build Integration**: Compile your scripts directly from VS Code
- **Syntax Highlighting**: Enhanced code readability

### 📚 Documentation Support
- **Hover Information**: View function documentation by hovering
- **Parameter Hints**: Get real-time parameter information
- **Quick Navigation**: Jump to definitions and references
- **Signature Help**: View function signatures while typing

### 🔧 Project Management
- **Project Templates**: Quick start with pre-configured templates
- **File Organization**: Automatic structure for SA-MP/Open.MP projects
- **Build Configurations**: Customize compiler settings
- **Include Management**: Smart handling of include files

## 🚀 Getting Started

### 📥 Installation

```bash
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Pawn Tools for Open.MP and SA-MP"
4. Click Install
```

### 🎯 Quick Start Guide

1. **Create a New Project**
   ```bash
   Ctrl+Shift+P → "Pawn Tools: Create Pawn File"
   ```

2. **Use Color Tools**
   ```pawn
   // Type # for color suggestions
   #red        → #FF0000
   #blue       → #0000FF
   #lightgreen → #90EE90
   ```

3. **Build Your Script**
   ```bash
   Ctrl+Shift+P → "Pawn Tools: Build File"
   ```

## 🎨 Color Features

### Color Formats
```pawn
// Hex Format
#FF0000    // Red
#00FF00    // Green
#0000FF    // Blue

// Embed Format
{FF0000}   // Red
{00FF00}   // Green
{0000FF}   // Blue

// Gametext Format
~r~        // Red
~g~        // Green
~b~        // Blue
```

### 🎯 Smart Color Features

1. **Intelligent Matching**
   - Fuzzy search for color names
   - Supports partial matches
   - Case-insensitive search

2. **Preview & Documentation**
   - Real-time color previews
   - Color information on hover
   - Quick conversion between formats

3. **Custom Colors**
   - Define your own color palettes
   - Import/Export color schemes
   - Share colors across projects

## ⚙️ Configuration

### 🔧 Settings Options

```jsonc
{
  "pawnTools": {
    // Color Settings
    "defaultColorFormat": "hex", // hex, embed, or gametext
    "showColorPreviews": true,
    "enableColorCompletion": true,

    // Build Settings
    "compiler": {
      "path": "path/to/compiler",
      "options": "-d3 -O3"
    },

    // Editor Settings
    "enableHover": true,
    "enableSnippets": true,
    "formatOnSave": true
  }
}
```

### 🎨 Color Configuration
- **Default Format**: Choose your preferred color format
- **Preview Style**: Customize how colors are displayed
- **Completion Triggers**: Configure auto-completion behavior

### 🛠️ Build Configuration
- **Compiler Path**: Set custom compiler location
- **Include Paths**: Configure include directories
- **Output Directory**: Customize build output location

## 🔄 Recent Updates

### Version 1.1.5
- Added comprehensive color management system
- Introduced color conversion tools
- Added 100+ predefined colors
- Enhanced color preview and documentation

### Version 1.0.0
- Initial release
- Basic Pawn development tools
- Build system integration
- IntelliSense support

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/southclown/Pawn-Tools/issues).

### 🌟 How to Contribute

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add: Amazing Feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📝 License

Copyright 2024 [Southclown](https://github.com/southclown).
This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Southclown**
- GitHub: [@southclown](https://github.com/southclown)
- Discord: @charleslienhart

## 🌟 Special Thanks

- SA-MP Team for the original Pawn compiler
- Open.MP Team for their continued support
- All contributors who have helped improve this extension

---

<div align="center">

### 🌟 Support the Project

⭐️ Star us on [GitHub](https://github.com/southclown/Pawn-Tools) if you find this project helpful!

Made with ❤️ for the SA-MP and Open.MP community

[Report Bug](https://github.com/southclown/Pawn-Tools/issues/new) · [Request Feature](https://github.com/southclown/Pawn-Tools/issues/new)

</div>
