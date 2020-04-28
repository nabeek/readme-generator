# A README Generator

This simple, lightweight application prompts the user for information relevant to their current project and then generates a finished README file.

# Motivation

Using newly acquired skills in Node, demonstrate the ability to utilize command-line interaction, local and external modules, and data collection and file generation.

# Installation and Usage

Run ```npm install``` from the command line

Then, invoke the application using ```node index.js```

# Tech Used

**Built with:**

[Node](https://nodejs.org/en/)\
[NPM](https://www.npmjs.com/)\
*[inquirer](https://www.npmjs.com/package/inquirer)\
*[file-system](https://www.npmjs.com/package/file-system)\
[Shields IO](https://shields.io/)

# Code Sample

As I iterated through different approaches on the "badge" requirement, I determined that licenses were a good opportunity. While I provided the top five most common open-source licenses in the prompt, I wanted to provide more options for the user. I relied on the "when" function in inquirer and a ternary operator in the file generation function. See both below:

```
{
  type: "list",
  message: "Which open-source license are you using?",
  name: "license",
  choices: ["Other"]
},
    {
      name: "other-license",
      message: "Provide the name of the license you are using:",
      when: (answers) => answers.license === "Other"
    },
```

```
## License

**${license === "Other" ? otherLicense : license}**
```

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License

MIT © [nabeek](https://github.com/nabeek)