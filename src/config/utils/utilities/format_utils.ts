export class FormatUtils {
    static toUpperCamelCase(input: string): string {
        const parts = input.split('_');
        const pascalCaseString = parts.map(part => {
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        }).join('');
        return pascalCaseString;
    }

    static toSnakeCase(input: string): string {
        const exp = /(?<=[a-z])(?=[A-Z])/;
        const parts = input.split(exp);
        const snakeCaseString = parts.map(part => part.toLowerCase()).join('_');
        return snakeCaseString;
    }
}