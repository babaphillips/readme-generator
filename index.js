// Include packages needed for this application

// The require method lets your application know that it needs to use the inquirer package to execute the code below.
const inquirer = require("inquirer");

// The fs module provides a lot of very useful functionality to access and interact with the file system.
// Once you do so, you have access to all its methods, which include: fs.
const fs = require("fs");

// This function is contained in the GenerateMarkdown file
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
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
      type: "checkbox",
      name: "license",
      message: "Select the license used in your Project",
      choices: [
        "No License",
        "Apache 2-0",
        "MPL 2.0",
        "GPL-3.0",
        "MIT",
        "Boost",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines to your Project",
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
      message: "Enter email address",
    },
  ]);
};

// Create a function to initialize app
questions().then((readmeData) => {
  // Create a function to write README file
  fs.writeFile("./dist/README.md", generateMarkdown(readmeData), (err) => {
    if (err) throw new Error(err);
    else
      console.log(
        "README.md created! Check out README.md in the dist folder to see it!"
      );
  });
});
