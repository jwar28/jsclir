/* eslint-disable no-case-declarations */
const {
  showMenu,
  pauseMenu,
  readUserInput,
  listTasksToDelete,
  confirm
} = require('./menuUtils')
const { saveIntoFile, getTasksInFile } = require('./dataUtils')
const TaskService = require('../services/taskService')

const createTask = async (taskList) => {
  const desc = await readUserInput('Description:')
  taskList.createTask(desc)
}

const confirmDeleteChoice = async () => {
  const confirmChoice = await confirm(
    'Are you sure you want to delete this task?'
  )
  return confirmChoice
}

const deleteTask = async (taskList) => {
  const id = await listTasksToDelete(taskList.taskListArray)
  if (id !== '0') {
    const confirmChoice = await confirmDeleteChoice()
    if (confirmChoice) {
      taskList.deleteTask(id)
      console.log('\nTask deleted successfully'.green)
    }
  }
}

const showAllTasks = async (taskList) => taskList.showAllTasks()

const showTasksByStatus = async (taskList, isCompleted) =>
  taskList.showTasksByStatus(isCompleted)

const menuActions = async (option, taskList) => {
  switch (option) {
    case '1':
      await createTask(taskList)
      break

    case '2':
      await showAllTasks(taskList)
      break

    case '3':
      await showTasksByStatus(taskList, true)
      break

    case '4':
      await showTasksByStatus(taskList, false)
      break

    case '5':
      break

    case '6':
      await deleteTask(taskList)
      break
  }
}

const startMenu = async () => {
  console.clear()
  const taskList = new TaskService()
  getTasksInFile(taskList)
  let option = ''

  do {
    option = await showMenu()

    await menuActions(option, taskList)

    saveIntoFile(taskList.taskListArray)

    if (option !== '0') await pauseMenu()
  } while (option !== '0')
}

module.exports = {
  startMenu
}
