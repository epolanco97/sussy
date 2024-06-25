import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';

export async function domainUsecases(path: string) {

    const usecasesPath = dirPath.join(path, 'usecases');
    fs.mkdirSync(usecasesPath, { recursive: true });
    fs.writeFileSync(dirPath.join(usecasesPath, 'usecases.dart'), TemplateUtils.exportTemplate());

}