import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { DirectoryUtils } from '../../config/utils/utilities/directory_utils';
import { domain } from './domain/domain';
import { infrastructure } from './infrastructure/infrastructure';
import { presentation } from './presentation/presentation';


export async function executeDartCode(wsFolder: string) {

    const libFolder = path.join(wsFolder, 'lib');

    if (!fs.existsSync(libFolder)) {
        vscode.window.showErrorMessage('The "lib" folder does not exist in your workspace.');
        return;
    }

    const directories = DirectoryUtils.getDirectories(libFolder);
    const selectedDir = await vscode.window.showQuickPick(directories, {
        placeHolder: 'Select the directory within "lib" where the new directory will be created'
    });

    if (!selectedDir) return vscode.window.showErrorMessage('No directory selected.');
    const featureName = await vscode.window.showInputBox({ prompt: 'Name of the new directory' });
    if (!featureName) return vscode.window.showErrorMessage('Directory name not specified.');

    const fullPath = path.join(libFolder, selectedDir, featureName);

    try {
        fs.mkdirSync(fullPath, { recursive: true });
        domain(fullPath, featureName);
        infrastructure(fullPath, featureName);
        presentation(fullPath, featureName);
        vscode.window.showInformationMessage(`Feature created`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error creating feature: ${error}`);
    }
}