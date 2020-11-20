// importing the inquirer package and file system module
import inquirer from "inquirer";
import fs from "fs";

// importing from generateMarkdown.js
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions prompted to the user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the instructions to use your application?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the guidelines/covenants for contributing to your application?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the instructions for running tests on your application?"
    },
    {
        type: "list",
        name: "license",
        message: "Under which license is the application covered?",
        choices: ['MIT', 'ISC', 'Apache', 'GPL', 'BSD'],
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
    err ? console.log(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(data=>{
        writeToFile('sampleReadme.md', generateMarkdown(data));
    });
}

  
// function call to initialize program
init();
