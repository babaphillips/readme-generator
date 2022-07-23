module.exports = (inputData) => {
  //Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    let badge = ``;
    switch (license) {
      case "Apache 2-0":
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case "MPL 2.0":
        badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
      case "GPL-3.0":
        badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case "MIT":
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case "Boost":
        badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    }
    return badge;
  }

  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== "No License") {
      return `[${license}](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#${license})`;
    } else {
      return ``;
    }
  }

  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "No License") {
      return `This application is licensed under the ${renderLicenseLink(
        license
      )} license.`;
    }
    return ``;
  }

  // Create a function to generate markdown for README
  //function generateMarkdown(data) {
  return `# ${inputData.title}

## Description:
${inputData.description}
  
## Table of Content
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${inputData.installation}

## Usage 
${inputData.usage}

## License 
${renderLicenseSection(inputData.license)}

## Contributing
${inputData.contributing}

## Tests
${inputData.tests}

## Questions?

GitHub: https://github.com/${inputData.githubUser}

How To Reach Me For Additional Questions: ${inputData.email}
`;
};
