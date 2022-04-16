const fs = require('fs')

const filePath = './data/data.json'

const saveFile = (data) => fs.writeFileSync(filePath, JSON.stringify(data))

const readFile = () => {
  if (!fs.existsSync(filePath)) {
    return null
  }

  const data = fs.readFileSync(filePath, { encoding: 'utf-8' })
  return JSON.parse(data)
}

module.exports = {
  saveFile,
  readFile
}
