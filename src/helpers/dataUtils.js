const { saveFile, readFile } = require('../data/fileManager')

const saveIntoFile = (taskListArray) => saveFile(taskListArray)

const getTasksInFile = (tasksFile) => {
  const tasksInFile = readFile()

  if (tasksInFile) tasksFile.getTasksFromArray(tasksInFile)
  return tasksInFile
}

module.exports = {
  saveIntoFile,
  getTasksInFile
}
