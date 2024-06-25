import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

export class DirectoryUtils{
    static getDirectories(srcPath: string): string[] {
        return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
    }
    
    static validateDirectoryExists(directory: string){
        if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
            vscode.window.showErrorMessage('No se encontró la carpeta "lib" en el espacio de trabajo.');
            return;
        }
    
    }
}


