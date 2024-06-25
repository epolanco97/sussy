"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infrastructureDatasources = infrastructureDatasources;
const fs = __importStar(require("fs"));
const dirPath = __importStar(require("path"));
const template_utils_1 = require("../../../config/utils/utilities/template_utils");
const interface_class_type_1 = require("../../../config/utils/enums/interface_class_type");
async function infrastructureDatasources(path, featureName) {
    const fullPath = dirPath.join(path, 'datasources');
    fs.mkdirSync(fullPath, { recursive: true });
    fs.writeFileSync(dirPath.join(fullPath, 'datasources.dart'), template_utils_1.TemplateUtils.exportTemplate());
    fs.writeFileSync(dirPath.join(fullPath, template_utils_1.TemplateUtils.classFileName(featureName, interface_class_type_1.EnumInterfaceClassName.Datasource, false)), template_utils_1.TemplateUtils.interfaceClassImplementsTemplate(featureName, interface_class_type_1.EnumInterfaceClassName.Datasource));
}
//# sourceMappingURL=datasources.js.map