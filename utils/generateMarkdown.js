// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
[![License:${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
For any questions,
Here is my Github profile link: [Github profile](https://github.com/${data.username})
You can also reach out to me directly at [Email link](mailto:${data.email})

## License
This project is licensed under the terms of the ${data.license} license.
`;
}

export default generateMarkdown;

