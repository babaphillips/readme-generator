// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your Project Title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your Project Title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description for your Project (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description for your Project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions for your Project",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information for your Project",
    },
    {
      type: "list",
      name: "license",
      message: "Select the license used in your Project",
      choices: ["No License", "Apache 2-0", "BSD", "GPL-3.0", "MIT"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contributions to your Project",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions for your Project",
    },
    {
      type: "input",
      name: "githubUser",
      message: "Enter your GitHub username",
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address,
      },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
