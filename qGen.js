// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
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
        choices: ["Academic Free License v3.0", "MIT", "ISC", "The Unilicense"],
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "github",
      },
      { type: "input", message: "What is email address?", name: "email" },
    ])
};
// .then((ans) => {
//   console.log(ans);
//   fs.writeFile("README.md", JSON.stringify(ans, null, 4), function (err) {
//     if (err) {
//       throw err;
//     }
//     console.log("wrote");
//   });


const createReadme = ({ title, description, install, usage, contribution, test, license, github, email }) =>
`
# ${title}
## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
## Usage
Provide instructions and examples for use. Include screenshots as needed.

## Credits
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## Features
If your project has a lot of features, list them here.
## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
## Tests
Go the extra mile and write tests for your application. Then provide examples on how to run them here.`

const init = () => {
    promptUser()

    .then((ans) => fs.writeFileSync('README.md', createReadme(ans)))
    .then(() => console.log("succesfully wrote reademe"))
    .catch((err) => console.error(err));
};

init();

// module.exports = promptUser;
