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
}

module.exports = TaskService
