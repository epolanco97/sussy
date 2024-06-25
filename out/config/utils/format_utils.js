"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatUtils = void 0;
class FormatUtils {
    static toUpperCamelCase(input) {
        const parts = input.split('_');
        const pascalCaseString = parts.map(part => {
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        }).join('');
        return pascalCaseString;
    }
    static toSnakeCase(input) {
        const exp = /(?<=[a-z])(?=[A-Z])/;
        const parts = input.split(exp);
        const snakeCaseString = parts.map(part => part.toLowerCase()).join('_');
        return snakeCaseString;
    }
}
exports.FormatUtils = FormatUtils;
//# sourceMappingURL=format_utils.js.map