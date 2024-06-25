"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const dart_1 = require("./features/dart/dart");
function activate(context) {
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
        if (selectedOption === 'Dart')
            return await (0, dart_1.executeDartCode)(wsFolder);
        if (selectedOption === 'C#')
            return vscode.window.showErrorMessage("For the moment, there is no support for the selected language.");
    });
    context.subscriptions.push(initialize);
}
function deactivate() {
    vscode.window.showInformationMessage("Thank you for using Sussy.");
}
//# sourceMappingURL=extension.js.map