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
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ### ${data.description}

  ## Table of Contents
  * [Installation Instructions] (## Installation Instructions)

  ## Installation Instructions
  ### ${data.installation}

  ## Intended Use
  ### ${data.usage}
  
  ## Contributor(s)
  ### ${data.contribution}
  
  ## Testing Instructions
  ### ${data.testing}
  
  ## Questions
  ### If there are any questions, including those about the use of this application, refer to the information below.
  
  ### Link to the main contributor's GitHub profile: www.github.com/${data.username}

  ### Link to the main contributor's email address: ${data.email}`;
}

module.exports = generateMarkdown;