function renderLicenseBadge(markdownData) {
    if (markdownData.license === 'None') {
        return ''
    } else if (markdownData.license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (markdownData.license === 'GNU GPLv3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (markdownData.license === 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (markdownData.license === 'ISC') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    } else if (markdownData.license === 'Mozilla') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
}

function renderLicenseSection(markdownData) {
    if (markdownData.license === 'None') {
        return `### There is no licensing information for this project.`
    } else if (markdownData.license === 'MIT') {
        return `### This project is licensed under the MIT open source license. Visit [Open Source Initiative](http://www.opensource.org/licenses/MIT) for the full license documentation.`
    } else if (markdownData.license === 'GNU GPLv3') {
        return `### This project is licensed under the GNU GPLv3 open source license. Visit [Open Source Initiative](http://www.opensource.org/licenses/gpl-3.0) for the full license documentation.`
    } else if (markdownData.license === 'Apache 2.0') {
        return `### This project is licensed under the Apache 2.0 open source license. Visit [Open Source Initiative](http://www.opensource.org/licenses/Apache-2.0) for the full license documentation.`
    } else if (markdownData.license === 'ISC') {
        return `### This project is licensed under the ISC open source license. Visit [Open Source Initiative](http://opensource.org/licenses/ISC) for the full license documentation.`
    } else if (markdownData.license === 'Mozilla') {
        return `### This project is licensed under the Mozilla open source license. Visit [Open Source Initiative](http://opensource.org/licenses/MPL-2.0) for the full license documentation.`
    }
}

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

  ${renderLicenseBadge(markdownData)}

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
  * [License](#license)

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
  }](https://www.github.com/${markdownData.username})

  ### Link to the main contributor's email address: ${markdownData.email}
  
  ## License
  
  #
  
  ${renderLicenseSection(markdownData)}
  `;
}

module.exports = generateMarkdown;
