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
      return this.add(userInput);
    } 
    else if(userInput.note.action === 'list'){
      return this.list(userInput);
    } 
    else if(userInput.note.action === 'delete'){
      return this.delete(userInput);
    }
    else{ 
      return console.log(userInput.note);
    }
  }
  // =========================================================

  async add(userInput){
    let record = {text:userInput.note.payload , category:userInput.note.category};
    // console.log(`Note Saved: ${userInput.note.payload } `);
    let userNotes = new UserNotes(record);
    await userNotes.save();
    console.log(`Note Saved: ${userNotes.text}`);
     
  }
  // =========================================================

  async delete(userInput){
    if(typeof(userInput.note) === 'string'){
      console.log(userInput);
    }else {
      // console.log(`Deleted Note : ${userInput.note.id}`);
      try{
        await UserNotes.findOneAndDelete({ _id:userInput.note.id}); 
      }
      catch(e){
        console.log('invalid ID');
      }
    }
  }
  // =========================================================
  async list(userInput){
    if(userInput.note.cat === 'all'){
      let allNotes = await UserNotes.find({});
      // console.log(allNotes);
      allNotes.forEach(val => {
        console.log(` ${val.text}
        category : ${val.category}            id : ${val._id} 
------------------------------------------------------------------------------------- `);
      });

    }else{
      let catNotes = await UserNotes.find({category:userInput.note.cat});
      // console.log(catNotes);
      catNotes.forEach(val => {
        console.log(` ${val.text}
        category : ${val.category}            id : ${val._id} 
------------------------------------------------------------------------------------- `);
      });
    }
  }
  // =========================================================

  
} 



module.exports = Notes; 
