const inquirer = require('inquirer')
require('colors')

const { menuQuestions, menuHeader, pauseMenuQuestion } = require('./menuQuestions')

const pauseMenu = async () => {
  console.log('\n')
  await inquirer.prompt(pauseMenuQuestion)
}
const showMenu = async () => {
  console.clear()
  menuHeader()

  const { option } = await inquirer.prompt(menuQuestions)
  return option
}

const readUserInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate (value) {
        if (value.length === 0) {
          return 'Please enter a value'
        }
        return true
      }
    }
  ]

  const { description } = await inquirer.prompt(question)
  return description
}

module.exports = {
  showMenu,
  pauseMenu,
  readUserInput
}
