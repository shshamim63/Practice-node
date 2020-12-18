const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicate = notes.find((note) => (note.title === title))
  if(duplicate) {
    console.log("Dulpicate")
  } else {
    notes.push({
      title: title,
      body: body
    })
    saveData(notes)
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => (note.title != title))
  if(notes.length > notesToKeep.length) {
    saveData(notesToKeep)
    console.log(chalk.green.inverse('Note removed'))
  } else {
    console.log(chalk.red.inverse('No match found'))
  }
}

const getNotes = () => {
  return loadNotes()
}

const showNote = (title) => {
  return loadNotes().filter((note)=> note.title === title)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json")
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch(e) {
    return []
  }
}

const saveData = (notes) => {
  const dataJson = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJson)
}
module.exports = {
  addNote: addNote,
  getNotes: getNotes,
  removeNote: removeNote,
  showNote: showNote
}