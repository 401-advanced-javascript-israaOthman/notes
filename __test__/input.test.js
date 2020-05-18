'use strict';

//mock

const Input  = require('../lib/input.js');

describe('Input Module',()=>{
  it('getNote() in case correct input it should return obj',()=>{
    let userInput = new Input();
    expect(userInput.getNote('hello' )).toEqual( {action: 'add' , payload : 'hello'});
  });

  it('getNote() in case wrong argument not(-a || --add) should return error msg',()=>{
    let userInput = new Input();
    expect(userInput.getNote('error')).toEqual( 'ERROR : please Enter either -a or --add to add a note  ');
  });

  it('getNote() in case didnt Enter Note ',()=>{
    let userInput = new Input();
    expect(userInput.getNote(true)).toEqual(  'ERROR : please Enter a vaild message inside qoutation ');
  });

});