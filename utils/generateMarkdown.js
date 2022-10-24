// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license === "MPL 2.0") {
    badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)" 
  } else if (license === "Apache") {
    badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "GNU") {
      badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === "MIT") {
      badge = "![Github license](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else {
      badge = "";
}
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
    if(license === "MPL 2.0") {
      licenseLink = "https://opensource.org/licenses/MPL-2.0"
    } else if (license === "Apache") {
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
    } else if (license === "GNU") {
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
    } else if (license === "MIT") {
      licenseLink = "https://opensource.org/licenses/MIT"
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ""
  if(licenseSection === "None") {
    licenseSection = ""
  } else {
      licenseSection = 
      `License: ${license}`;
    }
   return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ##  ${data.description}

  ##  ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)} 
  ##  ${renderLicenseLink(data.license)}

----

## Table of Contents

### * [Installation](#installation)
### * [License](#license)
### * [Contributing](#contributing)
### * [Tests](#tests)

----

## Installation
### You will have to install the following to use the application
###  ${data.installation}
----

## License

### License used for this project - ${data.license}

----

## Contributing:

### To become a contributor to this application, please create a pull request.
### Here are the steps required for doing that:
####    1. Fork the repository
####    2. Create a feature branch
####    3. Commit your new feature
####    4. Push your branch
####    5. Create a new pull request

## Tests:

###  ${data.tests}

----

## Questions:

### If you have any questions, feel free to contact me using the following links
  ### GitHub: https://github.com/${data.github}
  ### Email Address: ${data.email}

`;
}

module.exports = generateMarkdown;
