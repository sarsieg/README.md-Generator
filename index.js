// installing inquire and license and starting the string literal
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = (answers) =>
    `## ${answers.title} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)