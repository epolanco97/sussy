import * as fs from 'fs';
import * as dirPath from 'path';
import { TemplateUtils } from '../../../config/utils/utilities/template_utils';

export async function presentationProviders(path: string) {

    const providersPath = dirPath.join(path, 'providers');
    fs.mkdirSync(providersPath, { recursive: true });
    fs.writeFileSync(dirPath.join(providersPath, 'providers.dart'), TemplateUtils.exportTemplate());

}