const fs = require('node:fs')

fs.readdir('.', (err, file) =>{
    if(err){
        console.error('Failed reading the dir: ', err);
        return;        
    }

    file.forEach(file => {
        console.log(file);
        
    })
})