// object that holds the links to the corresponding license badges
const licenseBadge = 
    {
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        GPL: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        BSD: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }

// function to generate the user selected license badge
function generateBadge(data){
    return licenseBadge[data.license]; 
}
       
// function to generate markdown for README. It also provides the users the ability to add a new line within their responses in some of the sections.
function generateMarkdown(data) {
const badge = generateBadge(data);
return `# ${data.title}
${badge}

## Description
${data.description.split("\\n").join('\n')}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${data.installation.split("\\n").join('\n')}

## Usage
${data.usage.split("\\n").join('\n')}

## Contributing
${data.contributing.split("\\n").join('\n')}

## Tests
${data.test.split("\\n").join('\n')}

## Questions
For any questions,
Here is my Github profile link: [Github profile](https://github.com/${data.username})    
You can also reach out to me directly at [Email link](mailto:${data.email})

## License
This project is licensed under the terms of the ${data.license} license.
`;
}

// exporting the function generateMarkdown to be able to import to index.js
export default generateMarkdown;
