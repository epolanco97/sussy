import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';

export async function infrastructureMappers(path: string) {

    const mappersPath = dirPath.join(path, 'mappers');
    fs.mkdirSync(mappersPath, { recursive: true });
    fs.writeFileSync(dirPath.join(mappersPath, 'mappers.dart'), TemplateUtils.exportTemplate());

}