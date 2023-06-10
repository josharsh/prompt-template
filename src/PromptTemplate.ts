export class PromptTemplate {
  private inputVariables: string[];
  private template: string;

  constructor(inputVariables: string[], template: string) {
    this.inputVariables = inputVariables;
    this.template = template;
  }

  generatePrompt(input: { [key: string]: string }): string {
    let prompt = this.template;

    this.inputVariables.forEach((variable) => {
      const placeholder = `{${variable}}`;
      prompt = prompt.replace(placeholder, input[variable]);
    });

    return prompt;
  }
}