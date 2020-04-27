const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);

const questions = [
    {
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        name: "title",
        message: "What is your project's title?"
    },
    {
        name: "description",
        message: "Provide a description for your project:"
    },
    {
        name: "installation",
        message: "Provide installation instructions:"
    },
    {
        name: "usage",
        message: "Provide instructions and examples for use:"
    },
    {
        type: "list",
        message: "Which open-source license are you using?",
        name: "license",
        choices: [
            "Apache",
            "GPLv2",
            "GPLv3",
            "MIT",
            "MPL 2.0",
            "None"
        ]
    },
    {
        name: "contributing",
        message: "Provide any instructions for contributing:"
    },
    {
        name: "tests",
        message: "Provide any instructions for running any automated tests:"
    },
    {
        name: "email",
        message: "Provide an email address as contact information:"
    }

];

async function init() {
    const data = await inquirer.prompt(questions);
    await writeFileAsync("test.md", generateMarkdown(data));
};

init();