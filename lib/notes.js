'use strict';

//./file -a/--add "some notes" -- a  adding note
// =========================================================
const UserNotes = require('../models/notes-schema.js');

// =========================================================

class Notes {
  constructor() {
    // this.execute(userInput);
    // console.log(userInput);
  }

  async execute(userInput) {
    if(userInput.note.action === 'add'){
      this.add(userInput);
    }  else if(userInput.note.action === 'list'){
      this.list(userInput);
    } else if(userInput.note.action === 'delete'){
      this.delete(userInput);
    }
    else{ console.log(userInput.note); }
  }

  // =========================================================

  async add(userInput){
    let record = {text:userInput.note.payload , category:userInput.note.category};
    console.log(`Note Saved: ${userInput.note.payload } `);
    let userNotes = new UserNotes(record);
    await userNotes.save();
     
  }
  // =========================================================

  async delete(userInput){
    if(typeof(userInput.note) === 'string'){
      console.log(userInput);
    }else {
      console.log(`Deleted Note : ${userInput.note.id}`);
      await UserNotes.findByIdAndRemove(userInput.note.id); 
    }
  }
  // =========================================================
  async list(userInput){
    if(userInput.note.cat === 'all'){
      let allNotes = await UserNotes.find({});
      console.log(allNotes);
    }else{
      let catNotes = await UserNotes.find({category:userInput.note.cat});
      console.log(catNotes);
    }
  }
  // =========================================================
  
} 



module.exports = Notes; 
