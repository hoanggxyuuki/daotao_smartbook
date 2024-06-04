const prompt = require('prompt-sync')();
function celtofah(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

let tempCelsius = prompt(parseFloat()); 
console.log(`${tempCelsius}°C tương ứng với ${celtofah(tempCelsius)}°F`);