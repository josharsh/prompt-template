"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptTemplate = void 0;
var PromptTemplate = /** @class */ (function () {
    function PromptTemplate(inputVariables, template) {
        this.inputVariables = inputVariables;
        this.template = template;
    }
    PromptTemplate.prototype.generatePrompt = function (input) {
        var prompt = this.template;
        this.inputVariables.forEach(function (variable) {
            var placeholder = "{" + variable + "}";
            prompt = prompt.replace(placeholder, input[variable]);
        });
        return prompt;
    };
    return PromptTemplate;
}());
exports.PromptTemplate = PromptTemplate;
