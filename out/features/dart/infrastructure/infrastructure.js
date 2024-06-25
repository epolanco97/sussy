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
exports.infrastructure = infrastructure;
const fs = __importStar(require("fs"));
const dirPath = __importStar(require("path"));
const template_utils_1 = require("../../../config/utils/utilities/template_utils");
const datasources_1 = require("./datasources");
const dtos_1 = require("./dtos");
const mappers_1 = require("./mappers");
const repositories_1 = require("./repositories");
async function infrastructure(path, featureName) {
    const fullPath = dirPath.join(path, 'infrastructure');
    fs.mkdirSync(fullPath, { recursive: true });
    (0, datasources_1.infrastructureDatasources)(fullPath, featureName);
    (0, dtos_1.infrastructureDtos)(fullPath);
    (0, mappers_1.infrastructureMappers)(fullPath);
    (0, repositories_1.infrastructureRepositories)(fullPath, featureName);
    fs.writeFileSync(dirPath.join(fullPath, 'infrastructure.dart'), template_utils_1.TemplateUtils.exportTemplate());
}
//# sourceMappingURL=infrastructure.js.map