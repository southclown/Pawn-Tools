# Contributing to Pawn Tools

First off, thank you for considering contributing to Pawn Tools! It's people like you that make Pawn Tools such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check [this list](https://github.com/southclown/Pawn-Tools/issues) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/southclown/Pawn-Tools/issues). When creating an enhancement suggestion, please include:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead
* Explain why this enhancement would be useful

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the TypeScript styleguide
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Process

### 🚀 Getting Started

1. **Fork and Clone**
   ```bash
   # Fork the repository first, then:
   git clone https://github.com/southclown/Pawn-Tools.git
   cd Pawn-Tools
   ```

2. **Install Dependencies**
   ```bash
   # Install all required packages
   npm install
   ```

3. **Setup Development Environment**
   ```bash
   # Create a development branch
   git checkout -b feature/your-feature-name
   
   # Install VS Code Extension Manager (if needed)
   npm install -g @vscode/vsce
   ```

### 🛠️ Development Workflow

1. **Local Development**
   ```bash
   # Watch for changes and automatically compile
   npm run watch
   
   # In a new terminal, launch extension development host
   npm run dev
   ```

2. **Testing Your Changes**
   ```bash
   # Run unit tests
   npm run test
   
   # Run integration tests
   npm run test:integration
   
   # Run linter
   npm run lint
   ```

3. **Building the Extension**
   ```bash
   # Compile TypeScript
   npm run compile
   
   # Package the extension
   npm run package
   ```

### 📝 Making Changes

1. **Code Style**
   - Follow the TypeScript style guide
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Update documentation for API changes

2. **Commit Guidelines**
   ```bash
   # Stage your changes
   git add .
   
   # Commit with a descriptive message
   git commit -m "type(scope): description"
   # Example: "feat(colors): add new color conversion system"
   ```

3. **Testing Checklist**
   - [ ] Unit tests pass
   - [ ] Integration tests pass
   - [ ] Manual testing completed
   - [ ] Documentation updated
   - [ ] No linting errors

### 🔄 Submitting Changes

1. **Update Your Branch**
   ```bash
   # Get latest changes from upstream
   git remote add upstream https://github.com/southclown/Pawn-Tools.git
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push Changes**
   ```bash
   # Push to your fork
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request**
   - Go to the [Pawn Tools repository](https://github.com/southclown/Pawn-Tools)
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Add screenshots/GIFs if relevant

### 🔍 Review Process

1. **Automated Checks**
   - GitHub Actions will run:
     - Build verification
     - Unit tests
     - Integration tests
     - Linting

2. **Code Review**
   - Address reviewer comments
   - Make requested changes
   - Update PR as needed
   - Maintain clear communication

3. **Final Steps**
   - Squash commits if requested
   - Update PR title/description if needed
   - Ensure CI passes
   - Wait for final approval

### 📦 Release Process

1. **Version Update**
   ```bash
   # Update version in package.json
   npm version patch|minor|major
   ```

2. **Changelog**
   - Update CHANGELOG.md
   - Follow the Keep a Changelog format
   - Include all notable changes

3. **Release Build**
   ```bash
   # Create production build
   npm run build
   
   # Package for distribution
   vsce package
   ```

### 🐛 Debugging

1. **VS Code Debugging**
   - Press F5 to launch extension development host
   - Use breakpoints in VS Code
   - Check Debug Console for logs

2. **Common Issues**
   - Check the [troubleshooting guide](docs/TROUBLESHOOTING.md)
   - Review existing issues
   - Ask in discussions if needed

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### TypeScript Styleguide

* Use 2 spaces for indentation
* Prefer `const` over `let`
* Use PascalCase for type names
* Use camelCase for function names
* Use camelCase for property names and local variables
* Use whole words in names when possible

### Documentation Styleguide

* Use [Markdown](https://guides.github.com/features/mastering-markdown/)
* Reference functions with parentheses: `functionName()`
* Reference classes with brackets: `[ClassName]`
* Use code blocks for code examples

## Additional Notes

### Issue and Pull Request Labels

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed

Thank you for contributing to Pawn Tools! 🎮✨
