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
exports.executeDartCode = executeDartCode;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const directory_utils_1 = require("../../config/utils/utilities/directory_utils");
const domain_1 = require("./domain/domain");
const infrastructure_1 = require("./infrastructure/infrastructure");
const presentation_1 = require("./presentation/presentation");
async function executeDartCode(wsFolder) {
    const libFolder = path.join(wsFolder, 'lib');
    if (!fs.existsSync(libFolder)) {
        vscode.window.showErrorMessage('The "lib" folder does not exist in your workspace.');
        return;
    }
    const directories = directory_utils_1.DirectoryUtils.getDirectories(libFolder);
    const selectedDir = await vscode.window.showQuickPick(directories, {
        placeHolder: 'Select the directory within "lib" where the new directory will be created'
    });
    if (!selectedDir)
        return vscode.window.showErrorMessage('No directory selected.');
    const featureName = await vscode.window.showInputBox({ prompt: 'Name of the new directory' });
    if (!featureName)
        return vscode.window.showErrorMessage('Directory name not specified.');
    const fullPath = path.join(libFolder, selectedDir, featureName);
    try {
        fs.mkdirSync(fullPath, { recursive: true });
        (0, domain_1.domain)(fullPath, featureName);
        (0, infrastructure_1.infrastructure)(fullPath, featureName);
        (0, presentation_1.presentation)(fullPath, featureName);
        vscode.window.showInformationMessage(`Feature created`);
    }
    catch (error) {
        vscode.window.showErrorMessage(`Error creating feature: ${error}`);
    }
}
//# sourceMappingURL=dart.js.map