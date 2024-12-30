const path = require("path");
const vscode = require("vscode");
const fileUtils = require("./fileUtils");

const WORKSPACE_PATH = vscode.workspace.workspaceFolders[0].uri.fsPath;
const ASSETS_PATH = path.join(WORKSPACE_PATH, "assets");
const CSS_PATH = path.join(ASSETS_PATH, "css");
const JS_PATH = path.join(ASSETS_PATH, "js");

const INDEX_FILENAME = "index.html";
const CSS_FILENAME = "styles.css";
const JS_FILENAME = "scripts.js";

const INDEX_TEMPLATE_PATH = "src/templates/web/template.index.html";
const NEW_PAGE_TEMPLATE_PATH = "src/templates/web/template.new-page.html";
const CSS_TEMPLATE_PATH = "src/templates/web/assets/css/template.styles.css";
const JS_TEMPLATE_PATH = "src/templates/web/assets/js/template.scripts.js";

const SUCCESS_MESSAGE = "Done... Happy coding!";

/**
 * Creates a new web project skeleton as per the following:
 * - index.html
 * - assets
 *      - css
 *          - styles.css
 *      - js
 *          - scripts.js
 *      - images
 * @param {vscode.ExtensionContext} context The extension context
 */
function createWebProject(context) {
	//Setup the new directories
	fileUtils.createNewDirectories([ASSETS_PATH, CSS_PATH, JS_PATH]);

	//Create the index.html file in the workspace root
	fileUtils.createNewFileFromTemplate(
		WORKSPACE_PATH,
		INDEX_FILENAME,
		path.join(context.extensionPath, INDEX_TEMPLATE_PATH)
	);

	//Create the css file into the assets/css directory
	fileUtils.createNewFileFromTemplate(
		CSS_PATH,
		CSS_FILENAME,
		path.join(context.extensionPath, CSS_TEMPLATE_PATH)
	);

	//Create the js file into the assets/js directory
	fileUtils.createNewFileFromTemplate(
		JS_PATH,
		JS_FILENAME,
		path.join(context.extensionPath, JS_TEMPLATE_PATH)
	);

	//Copy the images directory into the user's workspace assets directory
	fileUtils.copyDirectory(
		path.join(context.extensionPath, "src/templates/web/assets/images"),
		path.join(ASSETS_PATH, "images")
	);

	vscode.window.showInformationMessage(SUCCESS_MESSAGE);
}

/**
 * Create one or more HTML files based on user input.
 * For example, given `about, contact us, privacy, sign in` as input by the user would result in the following files:
 * - about.html
 * - contact-us.html
 * - privacy.html
 * - sign-in.html
 * @param {vscode.ExtensionContext} context The extension context
 */
async function createHtmlPages(context) {
	let filenameList = [];

	//Get the list of file names
	try {
		await vscode.window
			.showInputBox({
				prompt: "Enter the filenames separated by commas (spaces are ok)",
				placeHolder: "E.g. about, contact us, privacy",
			})
			.then((input) => {
				input.split(",").map((filename) => {
					if (filename) {
						filenameList.push(
							filename
								.trim()
								.replace(" ", "-")
								.replace(/\..*/, "") //Remove any file extensions (Including .html)
								.concat(".html") //Append the .html file extension
						);
					}
				});
			});
	} catch (err) {
		console.error(err);
	}

	//Create the files
	if (filenameList.length > 0) {
		try {
			filenameList.forEach((filename) => {
				fileUtils.createNewFileFromTemplate(
					WORKSPACE_PATH,
					filename,
					path.join(context.extensionPath, NEW_PAGE_TEMPLATE_PATH)
				);
			});
		} catch (error) {
			vscode.window.showErrorMessage(`Error creating HTML pages: ${error.message}`);
			console.error(error);
		}
	}
}

module.exports = {
	createWebProject,
	createHtmlPages,
};
