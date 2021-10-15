// √ GIVEN a command-line application that accepts user input 
// √ WHEN I am prompted for information about my application repository
//  √ THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// √ WHEN I enter my project title
// √ THEN this is displayed as the title of the README
// √ WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// √ THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// √ WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the project?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
      },
      {
        type: "input",
        message: "What are the installation instructions?",
        name: "install",
      },
      {
        type: "input",
        message: "What is the usage information?",
        name: "usage",
      },
      {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution",
      },
      {
        type: "input",
        message: "What are the test insturctions?",
        name: "test",
      },
      {
        type: "list",
        message: "What license are you using?",
        name: "license",
        choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "github",
      },
      { type: "input", message: "What is email address?", name: "email" },
    ])
};



const createReadme = ({ title, description, install, usage, contribution, test, license, github, email }) =>
`
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${install}

## Usage
${usage}

## License
![license](https://img.shields.io/badge/license/${license}/${title})


## Contributing 
${contribution}

## Tests
${test}

## Questions
https://github.com/${github}
Please email me at ${email} for more questions

`

const init = () => {
    promptUser()

    .then((ans) => fs.writeFileSync('README.md', createReadme(ans)))
    .then(() => console.log("succesfully wrote reademe"))
    .catch((err) => console.error(err));
};

init();

// module.exports = promptUser;
