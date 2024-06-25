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
exports.presentation = presentation;
const fs = __importStar(require("fs"));
const dirPath = __importStar(require("path"));
const template_utils_1 = require("../../../config/utils/utilities/template_utils");
const providers_1 = require("./providers");
const screens_1 = require("./screens");
const views_1 = require("./views");
const widgets_1 = require("./widgets");
async function presentation(path, featureName) {
    const fullPath = dirPath.join(path, 'presentation');
    fs.mkdirSync(fullPath, { recursive: true });
    (0, providers_1.presentationProviders)(fullPath);
    (0, screens_1.presentationScreens)(fullPath);
    (0, views_1.presentationViews)(fullPath);
    (0, widgets_1.presentationWidgets)(fullPath);
    fs.writeFileSync(dirPath.join(fullPath, 'presentation.dart'), template_utils_1.TemplateUtils.exportTemplate());
}
//# sourceMappingURL=presentation.js.map