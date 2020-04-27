const licenses = require("./github")

function generateMarkdown(data) {
  const {
    username,
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    email
  } = data;

  return `
# ${title}

# Description

${description}

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# Installation

${installation}

# Usage

${usage}

# License

![${license}](${licenses.license})

# Contributing

${contributing}

# Tests

${tests}

# Questions

![GitHub avatar](https://github.com/${username}.png?size=150)
[![GitHub followers](https://img.shields.io/github/followers/${username}?style=social)](https://github.com/${username})

If you have any questions, feel free to reach out at ${email}

`;
}

module.exports = generateMarkdown;

// add avatar to questions