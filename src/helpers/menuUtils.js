const inquirer = require('inquirer')
require('colors')

const {
  menuQuestions,
  menuHeader,
  pauseMenuQuestion,
  deleteTaskQuestion,
  readUserInputQuestion,
  confirmQuestion,
  checkTaskQuestion
} = require('./menuQuestions')

const promptQuestion = async (question) => await inquirer.prompt(question)

const confirm = async (message) => {
  const question = await confirmQuestion(message)
  const { confirmChoice } = await promptQuestion(question)
  return confirmChoice
}

const readUserInput = async (message) => {
  const question = await readUserInputQuestion(message)
  const { description } = await promptQuestion(question)
  return description
}

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

const listTasksToDelete = async (taskList = []) => {
  const choices = taskList.map((task, i) => {
    const index = `${i + 1}`.green
    return {
      value: task.id,
      name: `${index}. ${task.description}`
    }
  })
  const question = await deleteTaskQuestion(choices)
  const { id } = await promptQuestion(question)
  return id
}

const markTaskAsFinished = async (taskList = []) => {
  const choices = taskList.map((task, i) => {
    const index = `${i + 1}`.green
    return {
      value: task.id,
      name: `${index}. ${task.description}`,
      checked: !!task.completedIn
    }
  })
  const question = await checkTaskQuestion(choices)
  const { selectedIds } = await promptQuestion(question)
  return selectedIds
}

module.exports = {
  showMenu,
  pauseMenu,
  readUserInput,
  listTasksToDelete,
  confirm,
  markTaskAsFinished
}
