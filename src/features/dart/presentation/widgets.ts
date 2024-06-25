import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';

export async function presentationWidgets(path: string) {

    const widgetsPath = dirPath.join(path, 'widgets');
    fs.mkdirSync(widgetsPath, { recursive: true });
    fs.writeFileSync(dirPath.join(widgetsPath, 'widgets.dart'), TemplateUtils.exportTemplate());

}