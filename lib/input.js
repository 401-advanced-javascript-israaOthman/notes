// capturing the input args and validat it 


const minimist = require('minimist');

function Input(){
   //capturing the args 
   const args = minimist(process.argv.slice(2));
   this.argument = this.getMethod(args);
   console.log( args );
}

Input.prototype.getMethod = function(argument){
    
   if(Object.keys(argument)[1] === 'add' || Object.keys(argument)[1] === 'a'){
    this.note = this.getNote(argument.add || argument.a);
   } else {
    this.note = this.getNote('error');
}
      return this.note;
}

Input.prototype.getNote = function (note = ''){
     if(note === 'error' ){
        return 'ERROR : please Enter either -a or --add to add a note  ';
     }
     else if(note !== true){
        return {action: 'add' , payload : note};
    }else {
        return 'ERROR : please Enter a vaild message inside qoutation ';
    }
}



module.exports = Input; 

