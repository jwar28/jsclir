const inquirer = require('inquirer')
require('colors')

const {
  menuQuestions,
  menuHeader,
  pauseMenuQuestion,
  listTaskToDelete,
  deleteTaskQuestions,
  readUserInputQuestion,
  confirmQuestion
} = require('./menuQuestions')

const promptQuestion = async (question) => await inquirer.prompt(question)

const pauseMenu = async () => {
  console.log('\n')
  await promptQuestion(pauseMenuQuestion)
}

const showMenu = async () => {
  console.clear()
  menuHeader()

  const { option } = await promptQuestion(menuQuestions)
  return option
}

const readUserInput = async (message) => {
  const question = await readUserInputQuestion(message)
  const { description } = await promptQuestion(question)
  return description
}

const listTasksToDelete = async (taskList = []) => {
  const choices = await listTaskToDelete(taskList)
  const question = await deleteTaskQuestions(choices)
  const { id } = await promptQuestion(question)
  return id
}

const confirm = async (message) => {
  const question = await confirmQuestion(message)
  const { confirmChoice } = await promptQuestion(question)
  return confirmChoice
}

module.exports = {
  showMenu,
  pauseMenu,
  readUserInput,
  listTasksToDelete,
  confirm
}
