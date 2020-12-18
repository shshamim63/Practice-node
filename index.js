const chalk = require('chalk');
const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder:{
    title: {
      describe: "Title of the context",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Body of the context",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv){
    notes.addNote(argv.title, argv.body);
  }
})

yargs.command({
  command: "remove",
  describe: "Removing a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.removeNote(argv.title);
  }
})


yargs.command({
  command: "list",
  describe: "Return list of notes",
  handler(){
    console.log(notes.getNotes())
  }
})

yargs.command({
  command: "read",
  describe: "Returns the body that matches the given title.",
  builder: {
    title: {
      describe: "Is the title of each contex",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    console.log(notes.showNote(argv.title))
  }
})

yargs.parse();