'use strict';

//./file -a/--add "some notes" -- a  adding note


function Notes(userInput) {
    this.execute(userInput);
  }
  
Notes.prototype.execute = function(userInput){
    if(userInput.argument.action === 'add'){
      this.add(userInput);
    }  
    else{ console.log(userInput.argument); }
  };
  

Notes.prototype.add = function (userInput){
    this.theNote = userInput.argument.payload;
    this.id = Math.ceil(Math.random()*10);
   
   
   console.log(`Note Saved: ${this.theNote} ---> with ID ${this.id}`)
   };
   

module.exports = Notes; 

