// installing inquire4 and license and starting the string literal
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = (answers) =>
    `## ${answers.title} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
${answers.description}.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.intall}.

## Usage
${answers.usage}.

## License
${answers.license}.

## Contribution
${answers.contribution}.

## Tests

## Questions
[A link to my gitHub](https://github.com/${answers.gitHub})
Email: ${answers.email}`

// starting prompts for the questions in the terminal
inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Description of the project.',
},
{
    type: 'input',
    name: 'install',
    message: 'What are the installation instructions?',
},
{

}
}
}
}])