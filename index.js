// A package for OS
const os = require ('node:os')

console.log('Informacion del sistema');
console.log(os.platform());
console.log(os.release());
console.log(os.arch());
// console.log(os.cpus()); More specific info about your cpus

// Package for path of files

const path = require('node:path')
//Ur path base on your OS
console.log(path.sep);

//To merge path
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath);

//To know the extension name
const extension = path.extname('my.log.txt')
console.log(extension);

