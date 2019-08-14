console.log("hello world main.js");

let output = document.getElementById('display-section');

let fruit = ["apple", "banana", "orange", "pear", "grape"];
console.log('fruit: ', fruit)
console.log("fruit.reverse() :", fruit.reverse())

output.innerHTML += `LEVEL 1: <br />`
output.innerHTML += `fruit:  [ ${fruit} ]`
output.innerHTML += `<br/>`
output.innerHTML += `fruit.reverse() :`
output.innerHTML += fruit.reverse();

