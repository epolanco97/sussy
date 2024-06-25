import * as vscode from 'vscode';
import { executeDartCode } from './features/dart/dart';

export function activate(context: vscode.ExtensionContext) {

	if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length === 0) {
		vscode.window.showErrorMessage('No workspace has been opened.');
		return;
	}
	const wsFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;

	const initialize = vscode.commands.registerCommand('sussy.initialize', async () => {
		const options = ['Dart'];
		const selectedOption = await vscode.window.showQuickPick(options, {
			placeHolder: 'Select a programming language'
		});

		if (selectedOption === 'Dart') return await executeDartCode(wsFolder);
		if (selectedOption === 'C#') return vscode.window.showErrorMessage("For the moment, there is no support for the selected language.");

	});

	context.subscriptions.push(initialize);


}

export function deactivate() {
	vscode.window.showInformationMessage("Thank you for using Sussy.");
}
