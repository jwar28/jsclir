require('colors')

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

const menuHeader = () => {
  console.log('\n================================'.green)
  console.log('\tSelect an option')
  console.log('================================\n'.green)
}

const readUserInputQuestion = async (message) => {
  return [
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
}

const confirmQuestion = async (message) => {
  return [{ type: 'confirm', name: 'confirmChoice', message }]
}

const deleteTaskQuestion = async (choices) => {
  choices.unshift({
    value: '0',
    name: `${'0.'.green} cancel`
  })
  return [
    {
      type: 'list',
      name: 'id',
      message: 'What task do you want to delete?',
      choices
    }
  ]
}

const checkTaskQuestion = async (choices) => {
  return [
    {
      type: 'checkbox',
      name: 'selectedIds',
      message: 'Select a task',
      choices
    }
  ]
}

module.exports = {
  menuQuestions,
  menuHeader,
  pauseMenuQuestion,
  deleteTaskQuestion,
  readUserInputQuestion,
  confirmQuestion,
  checkTaskQuestion
}
