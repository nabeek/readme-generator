function generateMarkdown(data) {
  const {
    username,
    title,
    "repo-link": repoLink,
    description,
    installation,
    usage,
    license,
    "other-license": otherLicense,
    contributing,
    tests,
    email
  } = data;

  const licenses = {
    Apache: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    GPLv2: "https://img.shields.io/badge/License-GPL%20v2-blue.svg",
    GPLv3: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
    "MPL 2.0": "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    Other: "https://img.shields.io/badge/license-other-lightgrey.svg"
  };

  return`# ${title}
[Repository link](${repoLink})

## Description

${description}

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

**${license === "Other" ? otherLicense : license}**
![${license}](${licenses[license]})

## Contributing

${contributing}

## Tests

${tests}

## Questions

![GitHub avatar](https://github.com/${username}.png?size=150)
[![GitHub followers](https://img.shields.io/github/followers/${username}?style=social)](https://github.com/${username})

If you have any questions, feel free to reach out at ${email}

`;
}

module.exports = generateMarkdown;