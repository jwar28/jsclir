const { showMenu, pauseMenu, readUserInput } = require('./menuUtils')
const { saveIntoFile, getTasksInFile } = require('./dataUtils')
const TaskService = require('../services/taskService')

const menuActions = async (option, taskList) => {
  switch (option) {
    case '1':
      // eslint-disable-next-line no-case-declarations
      const desc = await readUserInput('Description:')
      taskList.createTask(desc)
      break

    case '2':
      taskList.showAllTasks()
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
