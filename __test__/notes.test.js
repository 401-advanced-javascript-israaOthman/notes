'use strict';

const Notes = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Notes Module',()=>{
  
  it('execute() add',()=>{
    let resevedObj =  { note: { action: 'add', payload: 'hello' }}; 
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).not.toHaveBeenCalled();
  });

  it('execute() wrong argument',()=>{
    let resevedObj = { note:'ERROR : please Enter either -a or --add to add a note with --category \n or --list to show or --delete to delete  '};
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() no note ',()=>{
    let resevedObj = { note: 'ERROR : please Enter a vaild message inside qoutation '};
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });



  it('execute() delete with valid ID',()=>{
    let resevedObj =  { note: { action: 'delete', id: '5ec532896adada6ebaf6f205' }}; 
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() delete with No valid ID',()=>{
    let resevedObj =  { note: { action: 'delete', id: '5ec536adada6ebaf6f205' }}; 
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('excute()  list for all',()=>{
    let resevedObj =  { note: { action: 'list', cat: 'all' }}; 
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('excute() list for one categiry',()=>{
    let resevedObj =  { note: { action: 'list', cat: 'school' }}; 
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });



});