import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';

export async function domainDtos(path: string) {

    const dtosPath = dirPath.join(path, 'dtos');
    fs.mkdirSync(dtosPath, { recursive: true });
    fs.writeFileSync(dirPath.join(dtosPath, 'dtos.dart'), TemplateUtils.exportTemplate());

    const parametersPath = dirPath.join(dtosPath, 'parameters');
    fs.mkdirSync(parametersPath, { recursive: true });
    fs.writeFileSync(dirPath.join(parametersPath, 'parameters.dart'), TemplateUtils.exportTemplate());

}