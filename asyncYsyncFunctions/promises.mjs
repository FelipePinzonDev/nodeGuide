import { log } from "node:console";
import { readFile } from "node:fs/promises";

//sequential async function

console.log('Reading the async file just wait a second....');
const text1 = await readFile('./archivo.txt', 'utf-8')
console.log('First text1:', text1)
     
console.log('----> Things u need to do while reading the message');


console.log('Reading the sencond file just wait a second....');
const text2 = await readFile('./info.txt', 'utf-8')
console.log('Second text', text2);

//Parallel async function

Promise.all([
    readFile('./archivo.txt', 'utf-8'),  
    readFile('./info.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('Text1:',text)
    console.log('Text2:',secondText)   
})