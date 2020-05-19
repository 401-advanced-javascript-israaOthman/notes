// capturing the input args and validat it 


const minimist = require('minimist');

class Input {
  constructor(){
    //capturing the args 
    const args = minimist(process.argv.slice(2));

    if(Object.keys(args)[1] === 'add' || Object.keys(args)[1] === 'a'){
      this.note = this.getNote(args.add || args.a);
    } else {
      this.note = this.getNote('error');
    }
   
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