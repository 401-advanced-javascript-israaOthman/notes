// capturing the input args and validat it 


const minimist = require('minimist');


class Input {
   constructor(){
       //capturing the args 
   const args = minimist(process.argv.slice(2));
   this.argument = this.getMethod(args);
   }

   getMethod(argument){
      if(Object.keys(argument)[1] === 'add' || Object.keys(argument)[1] === 'a'){
         this.note = this.getNote(argument.add || argument.a);
        } else {
         this.note = this.getNote('error');
     }
           return this.note;
   }

    getNote(note){
      if(note === 'error' ){
         return 'ERROR : please Enter either -a or --add to add a note  ';
      }
      else if(note !== true){
         return {action: 'add' , payload : note};
     }else {
         return 'ERROR : please Enter a vaild message inside qoutation ';
     }
   }

}

module.exports = Input; 

