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
exports.infrastructureDtos = infrastructureDtos;
const fs = __importStar(require("fs"));
const dirPath = __importStar(require("path"));
const template_utils_1 = require("../../../config/utils/utilities/template_utils");
async function infrastructureDtos(path) {
    const dtosPath = dirPath.join(path, 'dtos');
    fs.mkdirSync(dtosPath, { recursive: true });
    fs.writeFileSync(dirPath.join(dtosPath, 'dtos.dart'), template_utils_1.TemplateUtils.exportTemplate());
    const responsesPath = dirPath.join(dtosPath, 'responses');
    fs.mkdirSync(responsesPath, { recursive: true });
    fs.writeFileSync(dirPath.join(responsesPath, 'responses.dart'), template_utils_1.TemplateUtils.exportTemplate());
    const parametersPath = dirPath.join(dtosPath, 'parameters');
    fs.mkdirSync(parametersPath, { recursive: true });
    fs.writeFileSync(dirPath.join(parametersPath, 'parameters.dart'), template_utils_1.TemplateUtils.exportTemplate());
}
//# sourceMappingURL=dtos.js.map