import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';

export async function presentationScreens(path: string) {

    const screensPath = dirPath.join(path, 'screens');
    fs.mkdirSync(screensPath, { recursive: true });
    fs.writeFileSync(dirPath.join(screensPath, 'screens.dart'), TemplateUtils.exportTemplate());

}