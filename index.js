#!/usr/bin/env node
'use strict';
 
const Input = require('./lib/input.js');
const Notee = require('./lib/notes.js');

const txt = new Input();

const note = new Notee(txt);
