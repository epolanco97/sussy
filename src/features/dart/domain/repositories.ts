import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';
import { EnumInterfaceClassName } from '../../../config/utils/enums/interface_class_type';

export async function domainRepositories(path: string, featureName: string) {

    const fullPath = dirPath.join(path, 'repositories');
    fs.mkdirSync(fullPath, { recursive: true });
    fs.writeFileSync(dirPath.join(fullPath, 'repositories.dart'), TemplateUtils.exportTemplate());
    fs.writeFileSync(dirPath.join(fullPath, TemplateUtils.classFileName(featureName, EnumInterfaceClassName.Repository, false)), TemplateUtils.abstractInterfaceClassTemplate(featureName, EnumInterfaceClassName.Repository));
}