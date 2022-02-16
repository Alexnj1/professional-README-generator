const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generate-markdown");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
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
  ]);
};

function installation(markdownData) {
  if (!markdownData.installation) {
    markdownData.installation = [];
  }

  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirmCode",
        message: "Do your installation instructions include code blocks?",
        default: false,
      },
    ])
    .then((confirm) => {
      if (confirm.confirmCode) {
        console.log(`
        =================================

        Enter Installation Instructions

            Enter a code block and a
        description for that code block

        =================================
  
        `);
        return codeBlockQuestions(markdownData);
      } else {
        console.log(`
        =================================

        Enter Installation Instructions

        =================================
  
        `);
          return inquirer 
          .prompt ([
              {
                  type: 'input',
                  name: 'installation',
                  message: 'what are the installation instructions for your project?'
              }
          ]).then((installationData) => {
              markdownData.installation.push(installationData)
              return markdownData
          })
      }
    });
}

function codeBlockQuestions(markdownData) {
    if (!markdownData.codeInstallation) {
        markdownData.codeInstallation = [];
    }

  return inquirer.prompt([
    {
      type: "input",
      name: "code",
      message: "Enter a block of code",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter a block of code!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "codeDescription",
      message: "Enter a description",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
    {
        type: 'confirm',
        name: 'confirmBlocks',
        message: 'Would you like to add another code block?',
        default: false
    }
  ]).then((codeBlockData) => {
    markdownData.codeInstallation.push(codeBlockData);
    if (codeBlockData.confirmBlocks) {
      return codeBlockQuestions(markdownData);
    } else {
      return markdownData;
    }
  });
}

function contributors(markdownData) {
  if (!markdownData.contributors) {
    markdownData.contributors = [];
  }

  return inquirer
    .prompt([
      {
        type: "input",
        name: "contribution",
        message: "Enter a contributor of your project",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a contributor!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddContributor",
        message: "Would you like to enter another contributor?",
        default: false,
      },
    ])
    .then((contributorData) => {
      markdownData.contributors.push(contributorData);
      if (contributorData.confirmAddContributor) {
        return contributors(markdownData);
      } else {
        return markdownData;
      }
    });
}

function init() {
  questions()
    .then(contributors)
    .then(installation)
    .then((markdownData) => {
      return generateMarkdown(markdownData);
    })
    .then((info) => {
      fs.writeFile("./dist/README.md", info, (err) => {
        if (err) throw err;
      });
    }).then(console.log('README.md file has been created! See the "dist" folder.'));
}

init();
