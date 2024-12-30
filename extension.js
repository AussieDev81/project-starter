const vscode = require("vscode");
const projectCreator = require("./src/projectCreator");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    context.subscriptions.push(
        // Create web project skeleton
        vscode.commands.registerCommand("project-creator.createWebProject", () =>
            projectCreator.createWebProject(context)
        ),

        // Create HTML pages
        vscode.commands.registerCommand("project-creator.createHtmlPages", () =>
            projectCreator.createHtmlPages(context)
        )
    );
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
