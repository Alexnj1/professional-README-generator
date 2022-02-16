// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateContributors(markdownData) {
  var x = [];
  console.log(markdownData);
  for (i = 0; i < markdownData.contributors.length; i++) {
    x.push(`### ${markdownData.contributors[i].contribution}` + "\r\n");
  }
  return x.join("");
}

function generateInstallInstructions(markdownData) {
  if (!markdownData.codeInstallation) {
      return `### ${markdownData.installation[0].installation}`
  } else {
    var x = [];
    for (i = 0; i < markdownData.codeInstallation.length; i++) {
      x.push(
        `    ${markdownData.codeInstallation[i].code}` +
          "\r\n" +
          `### ${markdownData.codeInstallation[i].codeDescription}` +
          "\r\n"
      );
    }
    return x.join("");
  }
}

function generateMarkdown(markdownData) {
  return `
  # ${markdownData.title}

  ## Description

  #

  ### ${markdownData.description}

  ## Table of Contents

  #

  * [Installation Instructions](#installation-instructions)
  * [Intended Use](#usage)
  * [Contribution](#contribution)
  * [Tests](#testing-instructions)
  * [Questions](#questions)

  ## Installation Instructions

  #

  ${generateInstallInstructions(markdownData)}

  ## Usage

  #

  ### ${markdownData.usage}
  
  ## Contribution

  #

${generateContributors(markdownData)}
  
  ## Testing Instructions

  #

  ### Refer to the video below
  
  ## Questions

  #
  
  ### If there are any questions, including those about the use of this application, refer to the information below.
  
  ### Link to the main contributor's GitHub profile: [${
    markdownData.username
  }](www.github.com/${markdownData.username})

  ### Link to the main contributor's email address: ${markdownData.email}`;
}

module.exports = generateMarkdown;
