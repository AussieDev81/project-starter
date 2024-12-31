# Project Starter

Skip writing boilerplate code when starting projects by using the project starter templates.

## Features

- Create new projects from templates with ease.
- Simplify your workflow by automating repetitive tasks.

## Installation

1. Download the latest `.vsix` file from the [actions](https://github.com/AussieDev81/project-starter/actions) tab.
2. Open Visual Studio Code.
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette.
4. Type `Extensions: Install from VSIX...` and select it.
5. Locate the `.vsix` file and click "Install."

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Search for `Hello World` to test the extension.
3. Customize and use templates to create new projects.

## Requirements

- Visual Studio Code version 1.96.0 or higher.
- This extension requires the Emmet extension to be installed and configured to work with JavaScript.

### Installing Emmet

1. Open Visual Studio Code.
2. Go to the Extensions view by pressing `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac).
3. Search for `Emmet`.
4. Click the `Install` button next to the Emmet extension.

### Configuring Emmet for JavaScript

Add the following configuration to your `settings.json` file to include JavaScript in the Emmet languages:

```json
{
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    }
}
```

## Known Issues

- No known issues at the moment.

## Release Notes

### 0.0.1

- Initial release of Project Starter.

---
