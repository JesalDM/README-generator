// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description
${data.description}

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

