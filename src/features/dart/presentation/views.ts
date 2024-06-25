import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';

export async function presentationViews(path: string) {

    const viewsPath = dirPath.join(path, 'views');
    fs.mkdirSync(viewsPath, { recursive: true });
    fs.writeFileSync(dirPath.join(viewsPath, 'views.dart'), TemplateUtils.exportTemplate());

}