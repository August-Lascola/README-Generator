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

    ${data.description}

    ${badges(data.badges)}

----

## Table of Contents

## * [Installation][#installation]
## * [License](#license)
## * Contributing(#contributing)
## * Tests(#tests)

----

## Installation

  ${data.installation}
----

## License

  License used for this project - ${data.license}

----

## Contributing:

  To become a contributor to this application, please create a pull request.
  Here are the steps required for doing that:
    1. Fork the repository
    2. Create a feature branch
    3. Commit your new feature
    4. Push your branch
    5. Create a new pull request

## Tests:

  ${data.tests}

----

### Questions:

## If you have any questions, feel free to contact me using the following links
  # GitHub: https://github.com/${data.github}
  # Email Address: ${data.email}

`;
}

module.exports = generateMarkdown;
