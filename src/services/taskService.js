require('colors')
const Task = require('../models/task')

class TaskService {
  constructor () {
    this.taskList = {}
  }

  get taskListArray () {
    const list = []
    Object.keys(this.taskList).forEach((key) => list.push(this.taskList[key]))
    return list
  }

  deleteTask (id = '') {
    if (this.taskList[id]) delete this.taskList[id]
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

  getTaskStatus (task) {
    return task.completedIn ? 'Completed'.green : 'Incomplete'.red
  }

  printTask (task, index) {
    const idx = `${index + 1}`
    const status = this.getTaskStatus(task)
    return `${idx.green} | ${task.description} :: ${status}`
  }

  showAllTasks () {
    console.log()
    this.taskListArray.forEach((task, i) =>
      console.log(this.printTask(task, i))
    )
  }

  showTasksByStatus (areTaskCompleted = true) {
    console.log()
    this.taskListArray.forEach((task, i) => {
      if (areTaskCompleted) {
        if (task.completedIn) {
          console.log(
            `${this.printTask(task, i)}\n  | Completed in :: ${
              task.completedIn
            }`
          )
        }
      } else {
        if (!task.completedIn) console.log(this.printTask(task, i))
      }
    })
  }
}

module.exports = TaskService
