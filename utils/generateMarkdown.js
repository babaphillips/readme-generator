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
  return `# ${data.title}

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

## Questions 
${inputData.questions}

GitHub: https://github.com${inputData.githubUser}

How To Reach Me For Additional Questions: ${inputData.email}
`;
}

module.exports = generateMarkdown;
