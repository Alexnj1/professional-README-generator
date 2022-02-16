const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generate-markdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your project description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions for your project?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your project's installation instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What is the intended use of your project?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your project's intended use!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contribution",
      message: "Who are the contributors of your project?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter contributors!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "testing",
      message: "What are the instructions on how to use your project?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your usage instructions!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  questions().then((data) => {
      return generateMarkdown(data)
  }).then((info) =>{
      fs.writeFile('./README.md', info, (err) =>{
          if (err) throw err
      })
  });
  //   
}

// Function call to initialize app
init();
