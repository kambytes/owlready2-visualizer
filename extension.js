// Imports:
const vscode = require('vscode');
const inputValidationExtension = require('./src/inputValidation')

// This method is called when your extension is activated
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const disposable = vscode.commands.registerCommand(
		'owlready2-visualizer.isActive', 
		function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Owlready2 Visualizer is now active!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

const result = validateInput(editor);

if (result.status == 'error') {
	showError(result.message);
	return;
}

if (result.status == 'warning') {
	showError(result.message);
}


module.exports = {
	activate,
	deactivate
}
