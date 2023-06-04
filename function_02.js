//https://www.youtube.com/watch?v=ACaT1Gfhe6I&t=28s

//1.DOM
//adalah representasi dari web page yang mana dengan representasi ini lah javascript
//dapat beriteraksi atau memanipulasi web page.
//jadi dom ada node  nya dan masing - masing node itu mewakili object yang ada di web page



//2.Import/Export Notation

//2.1 import script pada htlp dengan menempatkan tag <sciprt> </sciprt> pada head
//jadi dengan tag <script></script> ini kita bisa download external library nya contohnya adalah
// pada jquery dulu atau alpine js di html
///--------------------------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Contoh Penggunaan Alpine.js</title>
//   <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.x.x/dist/alpine.js"></script>
// </head>

//2.2 sedangkan di node js setelah npm install maka di page nya kita put syntax
//import 
const axios = require("axios");

//untuk export object  di node js
// File: person.js
const person = {
  name: 'John',
  age: 30
};

module.exports = person;

//atau export function juga bisa
// File: math.js
function add(a, b) {
  return a + b;
}

module.exports = add;


//2.3 sedangkan di react js

import axios from "axios"

//cara export di react js
//export const {person}
//export {anobject}




//3. Ternary Operators & Conditionals

//ada cara - cara singkat untuk mengunakannya, contohnya

let isofmyage = false
let myAge =30

//3.1
isofmyage = myAge>30 //ini hasilnya akan true jika myAge besar dari 30
//dengan cara ini code lebih pendek.


//3.2

let color ="green"
let isCorrect = false

color = isCorrect ? "green" :"red"

//mendambahkan tenary dengan nilai baru ini malah lebih 
//singkat
//atau 

color = isCorrect && "green"
//color akan green jika isCorret true
//ini berguna untuk render component dengan kondisi tertentu

//4. Optinal Chaining 


const fetchData = async () => {
    const data = await fetch("testing.com");
    //const name = data.person.name

    const name = data.person?.name
    //artinya adalah hanya akan aksess object dari name jika object person ada
    //ini membuat coding tidak error saat jalan
    //karna bisa jadi web sudah aksess field name padahal masih proses fetch.
}


//5. Template Literals

const fetchDataNew = async (animalName) => {
  const data = await fetch(`imaginaryapi.com/searchterm=${animalName}`);
  //dalam tanda  ` kemudian di gabungkan tanda ${javascript} maka di dalamnya bisa langsung dimasukan\
  //tanda javascript.

  const name = data.person?.name;
};