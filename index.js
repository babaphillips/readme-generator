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
        name: "installation",
        message: "Enter installation instructions for your Project",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your Project",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your Project",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your Project",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your Project",
      },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
