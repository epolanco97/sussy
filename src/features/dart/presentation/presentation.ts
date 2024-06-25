import * as fs from 'fs';
import * as dirPath from 'path';
import * as vscode from 'vscode';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';
import { presentationProviders } from './providers';
import { presentationScreens } from './screens';
import { presentationViews } from './views';
import { presentationWidgets } from './widgets';
export async function presentation(path: string, featureName: string) {

    const fullPath = dirPath.join(path, 'presentation');
    fs.mkdirSync(fullPath, { recursive: true });

    presentationProviders(fullPath);
    presentationScreens(fullPath);
    presentationViews(fullPath);
    presentationWidgets(fullPath);


    fs.writeFileSync(dirPath.join(fullPath, 'presentation.dart'), TemplateUtils.exportTemplate());
}