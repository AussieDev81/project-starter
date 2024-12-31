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
2. Search for `Create Web Project` or `Create HTML pages` to use the available templates.
3. Press `!` while in any HTML, CSS, or JavaScript file to view the range of available code snippets. 

Current code snippets:

- HTML
| Prefix/Command          | Title                         | Description                                                        |
|-------------------------|-------------------------------|--------------------------------------------------------------------|
| !basic-html             | Basic HTML skeleton           | Creates a basic HTML document                                      |
| !html-with-css-js-links | HTML with CSS and JS links    | Creates a HTML document with links to CSS and JS files             |
| !html-with-meta         | HTML with links and meta tags | Creates a HTML document with meta tags, links to CSS and JS files  |
| !favicon-links          | HTML favicon links            | Add custom favicon links to the head section of your HTML document |
| !contact-form           | HTML contact form             | Creates a basic contact form                                       |

- CSS
| Prefix/Command                | Title                    | Description                    |
|-------------------------------|--------------------------|--------------------------------|
| !add-css-layout               | Basic CSS layout         | Add a basic CSS layout         |
| !add-css-layout-with-branding | CSS layout with branding | Add a CSS layout with branding |

- JavaScript
| Prefix/Command              | Title                      | Description                          |
|-----------------------------|----------------------------|--------------------------------------|
| !event-listener             | Generic event listener     | Add an event listener to an element  |
| !Form-submit-event-listener | Form submit event listener | dd a submit event listener to a form |

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
