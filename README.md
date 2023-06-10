# prompt-template


# Prompt Template
Create predefined prompt templates for large language models in typescript to save your users time and effort! 

## Description

Prompt Template Generator is a TypeScript NPM package designed to help you create dynamic and customizable prompt templates. This is especially useful for crafting dialogues with AI, simplifying user experiences, and enhancing the ease of text generation.

## Installation

Install this package using npm:

```bash
npm i prompt-template
```

## Usage

Here is an example of how you can use this package:

```javascript
import { PromptTemplate } from 'prompt-template-generator';

const myTemplate = new PromptTemplate(['name', 'age'], 'My name is {name} and I am {age} years old.');
console.log(myTemplate.generatePrompt({ name: 'John Doe', age: '30' }));

const anotherTemplate = new PromptTemplate(['topic'], 'Tell me more about {topic}.');
console.log(anotherTemplate.generatePrompt({ topic: 'AI technology' }));
```

## Features
- **Dynamic Prompt Generation**: Create prompt templates with placeholders that can be replaced with your own data.
- **Flexible Templating**: Supports a diverse range of variable types, not just strings.
## Contributing
We appreciate all contributions. Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

