const fs = require("fs");
const path = require("path");

/**
 *  Create a new file
 * @param {String} destinationPath The target location where the file will be created
 * @param {String} filename The name of the file including file extension
 * @param {String} content The content to be written to the file
 */
function createNewFile(destinationPath, filename, content) {
    fs.writeFile(path.join(destinationPath, filename), content, (err) => {
        if (err) {
            console.error("Error writing the file:", err.message);
        } else {
            console.log(`${filename} added successfully to ${destinationPath}`);
        }
    });
}

/**
 * Creates a new file based on a defined file template
 * @param {String} destinationPath The path where the file will be created
 * @param {String} filename The name of the file including its file extension
 * @param {String} templatePath The path to the file template being referenced
 */
function createNewFileFromTemplate(destinationPath, filename, templatePath) {
    console.log(`Creating file from template: ${templatePath} to ${destinationPath}/${filename}`);
    
    // Read the template file
    fs.readFile(templatePath, "utf-8", (err, data) => {
        if (err) {
            console.error(`Error reading template file: ${err.message}`);
        } else {
            // Create the file only if the directory exists
            if (fs.existsSync(destinationPath)) {
                createNewFile(destinationPath, filename, data);
            } else {
                console.error("The given file directory was not found. Please check the file path and try again.");
            }
        }
    });
}

/**
 * Creates a new directory matching a given path name
 * @param {fs.PathLike} pathName The desired directory path name
 */
function createNewDirectory(pathName) {
    if (pathName !== "" && pathName !== undefined) {
        fs.mkdir(pathName, { recursive: true }, (err) => {
            if (err) {
                console.error(`Error creating ${pathName}:`, err.message);
            } else {
                console.log(`${pathName} created successfully`);
            }
        });
    }
}

/**
 * Creates new directories according to the given array of directory paths
 * @param {String[]} directories An array of directory paths
 */
function createNewDirectories(directories) {
    directories.forEach((dir) => createNewDirectory(dir));
}

/**
 * 
 * @param {String} source The source directory to copy from
 * @param {String} destination The destination directory to copy to
 */
function copyDirectory(source, destination) {
    
    console.log(`Copying directory from ${source} to ${destination}`);

    fs.mkdir(destination, { recursive: true }, (err) => {
        if (err) {
            console.error(`Error creating ${destination}:`, err.message);
        } else {
            fs.readdir(source, (err, files) => {
                if (err) {
                    console.error(`Error reading ${source}:`, err.message);
                } else {
                    files.forEach((file) => {
                        fs.copyFile(path.join(source, file), path.join(destination, file), (err) => {
                            if (err) {
                                console.error(`Error copying ${file}:`, err.message);
                            } else {
                                console.log(`${file} copied successfully to ${destination}`);
                            }
                        });
                    });
                }
            });
        }
    });
}

module.exports = {
    createNewFileFromTemplate,
    createNewDirectory,
    createNewDirectories,
    copyDirectory
};
