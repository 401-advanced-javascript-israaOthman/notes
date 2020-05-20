#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Notee = require('./lib/notes.js');
const mongoose = require('mongoose');



const MONGOOSE_URI ='mongodb://localhost:27017/notes';


mongoose.connect(MONGOOSE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function activate() {
  const txt = new Input();
  const note = new Notee();
  await note.execute(txt);
  mongoose.disconnect();
}
  
activate();


