const prompt = require('prompt-sync')();
function demkitu(str) {
    let length = str.length;
    console.log(`Chuỗi "${str}" có ${length} ký tự`);
}

let myString = prompt()
demkitu(myString);