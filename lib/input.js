
const minimist = require('minimist');

class Input {
  constructor(){
    this.obj ;
    //capturing the args 
    const args = minimist(process.argv.slice(2));
    console.log('the args from input.js',args);

    if(Object.keys(args)[1] === 'add' || Object.keys(args)[1] === 'a'){
      if(Object.keys(args)[2] === 'category'){
        this.note = this.getNote(args.add || args.a,args.category);
      }
    } else if(Object.keys(args)[1] === 'list'){
      this.showList(args.list);
    } else if(Object.keys(args)[1] === 'delete'){
      this.deleteNote(args.delete);
    }
    else {
      this.note = this.getNote('error');
    }
   
  }

  getNote(note,cat){
    if(note === 'error' ){
      return 'ERROR : please Enter either -a or --add to add a note and --category to add category ';
    }
    else if(note !== true && cat !== true){
      this.obj ={action: 'add' , payload: note , category: cat} ;
      return  this.obj;
    }else {
      return 'ERROR : please Enter a vaild message inside qoutation ';
    }
  }
  showList(list){
    if(list === true){
      this.obj ={action: 'list' , cat : 'all'};
      return this.obj ; 
    }else {
      this.obj ={action: 'list' , cat : list };
      return this.obj ; 
    }
  }

  deleteNote(delID){
    if(delID === true){
      return 'ERROR : please Enter a ID for the Note you want to delete ';
    } else {
      this.obj = {action: 'delete' , id : delID };
      return this.obj;
    }
  }

}

module.exports = Input; 