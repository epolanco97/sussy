"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateUtils = void 0;
const interface_class_type_1 = require("../enums/interface_class_type");
const format_utils_1 = require("./format_utils");
class TemplateUtils {
    static exportTemplate = () => "export '';";
    static interfaceClassImplementsTemplate(featureName, type) {
        const className = format_utils_1.FormatUtils.toUpperCamelCase(featureName);
        const folder = `${(type === interface_class_type_1.EnumInterfaceClassType.Datasource) ? 'datasources' : 'repositories'}`;
        const fileExtension = `${(type === interface_class_type_1.EnumInterfaceClassType.Datasource) ? 'datasource' : 'repository'}.dart`;
        const fullClass = `${className}${(type === interface_class_type_1.EnumInterfaceClassType.Datasource) ? 'Datasource' : 'Repository'}`;
        const fullImport = `import ../../domain/${folder}/${format_utils_1.FormatUtils.toSnakeCase(featureName)}_${fileExtension}`;
        return `${fullImport}\n\nclass ${fullClass}Impl implements ${fullClass} {}`;
    }
    static abstractInterfaceClassTemplate(featureName, type) {
        const className = format_utils_1.FormatUtils.toUpperCamelCase(featureName);
        const fullClass = `${className}${(type === interface_class_type_1.EnumInterfaceClassType.Datasource) ? 'Datasource' : 'Repository'}`;
        return `abstract interface class ${fullClass} {}`;
    }
    static classFileName(featureName, type, isImplementation) {
        const extension = () => {
            switch (type) {
                case interface_class_type_1.EnumInterfaceClassType.Datasource:
                    return (isImplementation) ? 'datasource_impl' : 'datasource';
                case interface_class_type_1.EnumInterfaceClassType.Repository:
                    return (isImplementation) ? 'repository_impl' : 'repository';
            }
        };
        return `${featureName}_${extension()}.dart`;
    }
}
exports.TemplateUtils = TemplateUtils;
//# sourceMappingURL=template_utils.js.map