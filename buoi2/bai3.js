const prompt = require('prompt-sync')();
function chanle(number) {
    if (number % 2 === 0) {
        console.log(`${number} là số chẵn`);
    } else {
        console.log(`${number} là số lẻ`);
    }
}

let num = prompt(); 
chanle(num);