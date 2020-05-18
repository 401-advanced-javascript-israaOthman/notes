'use strict';

//./file -a/--add "some notes" -- a  adding note

class Notes {
  constructor(userInput) {
    this.execute(userInput);
  }

  execute(userInput) {
    if(userInput.argument.action === 'add'){
      this.add(userInput);
    }  
    else{ console.log(userInput.argument); }
  }
  add(userInput){
    this.theNote = userInput.argument.payload;
    this.id = Math.ceil(Math.random()*10);
   
   
    console.log(`Note Saved: ${this.theNote} `);
  }
} 



module.exports = Notes; 

