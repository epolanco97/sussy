import * as fs from 'fs';
import * as dirPath from 'path';
import * as vscode from 'vscode';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';
import { infrastructureDatasources } from './datasources';
import { infrastructureDtos } from './dtos';
import { infrastructureMappers } from './mappers';
import { infrastructureRepositories } from './repositories';
export async function infrastructure(path: string, featureName: string) {

    const fullPath = dirPath.join(path, 'infrastructure');
    fs.mkdirSync(fullPath, { recursive: true });

    infrastructureDatasources(fullPath, featureName);
    infrastructureDtos(fullPath);
    infrastructureMappers(fullPath);
    infrastructureRepositories(fullPath, featureName);


    fs.writeFileSync(dirPath.join(fullPath, 'infrastructure.dart'),TemplateUtils.exportTemplate());
}