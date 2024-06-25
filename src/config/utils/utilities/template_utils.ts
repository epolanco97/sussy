import { EnumInterfaceClassName } from "../enums/interface_class_type";
import { FormatUtils } from "./format_utils";

export class TemplateUtils {
    static exportTemplate = (): string => "export '';";

    static interfaceClassImplementsTemplate(featureName: string, type: EnumInterfaceClassName) {
        const className = FormatUtils.toUpperCamelCase(featureName);
        const folder = `${(type === EnumInterfaceClassName.Datasource) ? 'datasources' : 'repositories'}`;
        const fileExtension = `${(type === EnumInterfaceClassName.Datasource) ? 'datasource' : 'repository'}.dart`;
        const fullClass = `${className}${(type === EnumInterfaceClassName.Datasource) ? 'Datasource' : 'Repository'}`;
        const fullImport = `import ../../domain/${folder}/${FormatUtils.toSnakeCase(featureName)}_${fileExtension}`;
        return `${fullImport}\n\nclass ${fullClass}Impl implements ${fullClass} {}`;
    }

    static abstractInterfaceClassTemplate(featureName: string, type: EnumInterfaceClassName) {
        const className = FormatUtils.toUpperCamelCase(featureName);
        const fullClass = `${className}${(type === EnumInterfaceClassName.Datasource) ? 'Datasource' : 'Repository'}`;
        return `abstract interface class ${fullClass} {}`;
    }

    static classFileName(featureName: string, type: EnumInterfaceClassName, isImplementation: boolean) {
        const extension = () => {
            switch (type) {
                case EnumInterfaceClassName.Datasource:
                    return (isImplementation) ? 'datasource_impl' : 'datasource';
                case EnumInterfaceClassName.Repository:
                    return (isImplementation) ? 'repository_impl' : 'repository';
            }
        }
        return `${featureName}_${extension()}.dart`;
    }
}