//To have some stasts about a specific File in this case

const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.size,
);

//To have the read the file but Sync
console.log('Reading the first file just wait a second....');
const text = fs.readFileSync('./archivo.txt', 'utf-8') 
console.log(text);


//Async example

console.log('Reading the async file just wait a second....');
fs.readFile('./archivo.txt', 'utf-8', (err, anyText) => { // <--- call back
    console.log('First text:', anyText);
}) 

console.log('----> Things u need to do while reading the message');


console.log('Reading the sencond file just wait a second....');
fs.readFile('./info.txt', 'utf-8', (err, text) => {
    console.log('Second text:', text);
})
