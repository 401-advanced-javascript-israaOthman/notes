'use strict';

//./file -a/--add "some notes" -- a  adding note


class Notes {
  constructor(userInput) {
    this.execute(userInput);
  }

  execute(userInput) {
    if(userInput.note.action === 'add'){
      this.add(userInput);
    }  
    else{ console.log(userInput.note); }
  }
  add(userInput){
    this.theNote = userInput.note.payload;
    this.id = Math.ceil(Math.random()*10);
   
   
    console.log(`Note Saved: ${this.theNote} `);
  }
} 



module.exports = Notes; 
