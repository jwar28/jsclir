require('colors')
const Task = require('../models/task')

class TaskService {
  constructor () {
    this.taskList = {}
  }

  get taskListArray () {
    const list = []
    Object.keys(this.taskList).forEach((key) => {
      list.push(this.taskList[key])
    })
    return list
  }

  getTasksFromArray (tasks = []) {
    tasks.forEach((task) => {
      this.taskList[task.id] = task
    })
  }

  createTask (description) {
    const task = new Task(description)
    this.taskList[task.id] = task
  }

  showAllTasks () {
    console.log()
    this.taskListArray.forEach((task, i) => {
      const idx = `${i + 1}`
      let status = ''
      task.completedIn
        ? (status = 'Completed'.green)
        : (status = 'Incomplete'.red)
      console.log(`${idx.green} ${task.description} :: ${status}`)
    })
  }
}

module.exports = TaskService
