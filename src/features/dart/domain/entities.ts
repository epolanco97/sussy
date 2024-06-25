import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';

export async function domainEntities(path: string) {

    const entitiesPath = dirPath.join(path, 'entities');
    fs.mkdirSync(entitiesPath, { recursive: true });
    fs.writeFileSync(dirPath.join(entitiesPath, 'entities.dart'), TemplateUtils.exportTemplate());

}