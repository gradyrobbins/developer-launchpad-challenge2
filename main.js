console.log("hello world main.js");

let level1 = document.getElementById('level1');
let level2 = document.getElementById('level2');

let fruit = ["apple", "banana", "orange", "pear", "grape"];
console.log('fruit: ', fruit)
console.log("fruit.reverse() :", fruit.reverse())

level1.innerHTML += `LEVEL 1: <br />`
level1.innerHTML += `fruit:  [ ${fruit} ]`
level1.innerHTML += `<br/>`
level1.innerHTML += `fruit.reverse() :`
level1.innerHTML += fruit.reverse();


function reverseString(str){
    let revstr = "";
    for(let i = str.length-1; i>=0; i--){
        revstr = revstr+ str[i];
    }
    return revstr;
}

for (let i = 0; i < fruit.length; i++) {
    console.log(reverseString(fruit[i]))
    level2.innerHTML += reverseString(fruit[i] + ", ")
}
