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

module.exports = {
  menuQuestions,
  menuHeader,
  pauseMenuQuestion
}
