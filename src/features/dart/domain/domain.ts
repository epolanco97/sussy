import * as fs from 'fs';
import * as dirPath from 'path';
import * as vscode from 'vscode';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';
import { domainDatasources } from './datasources';
import { domainDtos } from './dtos';
import { domainEntities } from './entities';
import { domainRepositories } from './repositories';
import { domainUsecases } from './usecases';
export async function domain(path: string, featureName: string) {

    const fullPath = dirPath.join(path, 'domain');
    fs.mkdirSync(fullPath, { recursive: true });

    domainDatasources(fullPath, featureName);
    domainDtos(fullPath);
    domainEntities(fullPath);
    domainRepositories(fullPath, featureName);
    domainUsecases(fullPath);


    fs.writeFileSync(dirPath.join(fullPath, 'domain.dart'),TemplateUtils.exportTemplate());
}