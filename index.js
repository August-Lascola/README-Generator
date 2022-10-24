// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");

const { writeFile, copyFile } = require('./utils/generateMarkdown');
const generateMarkdown = require("./utils/generateMarkdown");
const badges = require("./utils/badges").badges;

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
}, {
    type: "input",
    message: "What is the project about? Please give a detailed description of your project.",
    name: "description"
}, {
    type: "input",
    message: "Please include a Table of Contents.",
    name: "table of contents"
}, {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation"
}, {
    type: "input",
    message: "Provide Instructions and examples for use. Include screenshots as necessary",
    name: "usage"
}, {
    type: "input",
    message: "What license does your project use?",
    name: "license",
    choices: ['MPL 2.0', 'Apache', 'GNU', 'MIT', 'None of the above'],
}, {
    type: "input",
    message: "If you would like other users to contribute to this project, please instruct them how to do so.",
    name: "contributing"
}, {
    type: "input",
    message: "Provide examples of tests for your project and how to run them",
    name: "tests"
}, {
    type: "input",
    message: "Please provide your GitHub Username (required).",
    name: "github"
}, {
    type: "input",
    message: "Please provide your email address (required).",
    name: "email"

}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Success!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();


