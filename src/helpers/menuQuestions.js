require('colors')

const menuHeader = () => {
  console.log('\n================================'.green)
  console.log('\tSelect an option')
  console.log('================================\n'.green)
}

const menuQuestions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: '1',
        name: '1. Create task'
      },
      {
        value: '2',
        name: '2. View all tasks'
      },
      {
        value: '3',
        name: '3. View completed tasks'
      },
      {
        value: '4',
        name: '4. View unfinished tasks'
      },
      {
        value: '5',
        name: '5. Mark task as finished'
      },
      {
        value: '6',
        name: '6. Delete task'
      },
      {
        value: '0',
        name: '0. Finish'
      }
    ]
  }
]

const pauseMenuQuestion = [
  {
    type: 'input',
    name: 'pause',
    message: `\nPress ${'enter'.green} to continue\n`
  }
]

const listTaskToDelete = async (taskList = []) => {
  const choices = taskList.map((task, i) => {
    const index = `${i + 1}`.green
    return {
      value: task.id,
      name: `${index}. ${task.description}`
    }
  })
  return choices
}

const deleteTaskQuestions = async (choices) => {
  choices.unshift({
    value: '0',
    name: `${'0.'.green} cancel`
  })
  const question = [
    {
      type: 'list',
      name: 'id',
      message: 'What task do you want to delete?',
      choices
    }
  ]

  return question
}

const readUserInputQuestion = async (message) => {
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

  return question
}

const confirmQuestion = async (message) => {
  return [{ type: 'confirm', name: 'confirmChoice', message }]
}

module.exports = {
  menuQuestions,
  menuHeader,
  pauseMenuQuestion,
  listTaskToDelete,
  deleteTaskQuestions,
  readUserInputQuestion,
  confirmQuestion
}
