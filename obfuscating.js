const fs = require('fs');
const path = require('path');
const obfuscator = require('javascript-obfuscator');


const obfuscating = () => {
    fs.readFile('./giving_for_obfuscation.js','UTF-8',(err,data)=>{
        if(err) {
            throw err
        }
        let obfuscationResult = obfuscator.obfuscate(data)
        fs.writeFile('./my_code_obfuscated.js', obfuscationResult.getObfuscatedCode(), err=>{
            if(err) {
                throw err
            }
            console.log('work is done your obfuscated file created')
        })
    })
}
module.exports = obfuscating
