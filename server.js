const express = require('express');
const obfuscating = require('./obfuscating');
obfuscating();
const app = express();
const port  = 3000;

app.listen(()=>console.log(`shef jan servery miacel e ${port}-i vra`))