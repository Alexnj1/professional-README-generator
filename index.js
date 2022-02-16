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
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions for your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the intended use of your project?",
    },
    {
      type: "input",
      name: "contribution",
      message: "Who are the contributors of your project?",
    },
    {
      type: "input",
      name: "testing",
      message: "What are the instructions on how to use your project?",
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
