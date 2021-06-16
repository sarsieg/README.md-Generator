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