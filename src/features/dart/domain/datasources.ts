import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';
import { EnumInterfaceClassName } from '../../../config/utils/enums/interface_class_type';

export async function domainDatasources(path: string, featureName: string) {

    const fullPath = dirPath.join(path, 'datasources');
    fs.mkdirSync(fullPath, { recursive: true });
    fs.writeFileSync(dirPath.join(fullPath, 'datasources.dart'), TemplateUtils.exportTemplate());
    fs.writeFileSync(dirPath.join(fullPath, TemplateUtils.classFileName(featureName, EnumInterfaceClassName.Datasource, false)), TemplateUtils.abstractInterfaceClassTemplate(featureName, EnumInterfaceClassName.Datasource));
}