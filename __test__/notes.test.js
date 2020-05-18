'use strict';

const Notes = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Notes Module',()=>{
  
  it('test the note object if console appears',()=>{
    let resevedObj =  { action: 'add', payload: 'hello' };
    const note = new Notes(resevedObj);
    note.add(resevedObj);
    expect(console.log).toHaveBeenCalled();
  });

});