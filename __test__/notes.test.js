'use strict';

const Notes = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Notes Module',()=>{
  
  it('test the note object if console appears',()=>{
    let resevedObj =  { note: { action: 'add', payload: 'hello' }}; 
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('test the note object if console appears',()=>{
    let resevedObj = { note: 'ERROR : please Enter either -a or --add to add a note  '};
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('test the note object if console appears',()=>{
    let resevedObj = { note: 'ERROR : please Enter a vaild message inside qoutation '};
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('if the excute for delete',()=>{
    let resevedObj =  { note: { action: 'delete', id: '5h5421456sd4ds642' }}; 
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('if the excute for list for all',()=>{
    let resevedObj =  { note: { action: 'list', cat: 'all' }}; 
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('if the excute for list for one categiry',()=>{
    let resevedObj =  { note: { action: 'list', cat: 'school' }}; 
    const note = new Notes();
    note.execute(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });



});