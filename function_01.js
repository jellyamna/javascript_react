//https://www.youtube.com/watch?v=m55PTVUrlnA&t=52s

//1. function

//cara export function dari file lain 
export default function NamaFunction(){

}


//cara export arrow function 
export const NamaArrow = () =>{

}


//1. dalam react kita define component dan component adalah function 

//ini adalah component spesific untuk react
const MyComponent = () =>{
    return <div></div>
}


//arrow function juga bisa jadi anonymous dan sangat berguna dalam beberap case
//jika tidak ada arrow function maka anonymous functino tidak bisa di implementasi
// pada function biasa.

<button onClick={()=>{
    console.log("hallo world")
}}>

</button>


//2.Ternary Operatos  - conditionan operator 
//jsx : memungkinkan untuk membuat tampilan UI dalam bahasa pemograman Javascript
// jadi kita lebih bisa leluasa untuk mengatur UI base on logic yang ada di Javascript.
//jadi harusnya dalam jsx itu harus ada bagian untuk mengolah UI


let age = 16;
let name = age > 10 && "jelly";

let name2 = age > 10 || "jelly";

// operator && adalah konditional pada contoh di atas nama akan jadi jelly jika
//age >10
//dan operator || adalah jika age tiak besar dari 10 baru lah nama2 = jelly

let name3 = age >10 ?"Pedro" : "Jack";
//operator tenary menguankan ? dan :
// gunanya adalah dengan  dalam menampilkan component dengan condisi contoh:


const Component =() =>{
    return age >10 ? <div>Pedro</div> : <div>Jack</div>
}

//3.Object

const person ={
    name :" Pedro",
    age: 20,
    isMarried:false,
}

//cara biasa 

const namePerson = person.name
const agePerson = person.age

//cara lain adalah dengan destructure
//cara ini lebih singkat untuk mengambil value dari object javascript
const {namePerson2,agePerson2,isMarriedPerson} = person


//cara untuk assign value ke object, jika nama variablenya sama dengan
//nama field object maka tidak perlu di buat nama :nama


const name_2 ="jelly"
const age_2 = 20

const person2 = {
  name_2: name_2, //dapat di set secara explicit
  age_2, //di set dengan implicit karna namanya sama dengan varialbe yang akan di assign.
  isMarried_2: false,
};



//cara copy oject namun ada yang akan kita rubah
//... itu maksudnya ambil semua yang ada di person2 kemudian field name di ganti
//... operator ini banyak sekali kegunaannya di javascript. (contoh array)
const person_3 = {...person2,name:"Amna"}


//contoh array
const names = ["Pedro","Jack","Jessica"];
const names_new = [...names,"Joel"] ;
//maka array baru ini akan memeiliki value names tambahan Joel 


//4.Map, Filter ..


//3 function yang sering di gunakan saat manipulasi array
//.map()
//.filter()
//.reduce()
//tapi yang sering digunakan adalah map() dan filter()

let names_array = ["Pedro", "Jack", "Jessica", "Pedro", "Pedro"];

//contoh cara alter value pada array di atas dengan menambahkan 1 di belakang value nya
//kita bisa lakukan degan loop atau dengan map yang lebih proper
//map membutuhkan arg, yang merupakan setiap element di array
//jadi anoymous arrow function itu akan di execute utuk setiap element
//jadi arg adalah iterate

names_array.map((name) => {
    return name + 1;
});

//contoh di react

names_array.map((name) => {
  return <h1>{name}</h1>
});
//jadi react akan generate setiap header dari array tersebut


//filter di gunakan untuk memfilter array dari data yang akan di buang
//minsalnya kita ingin menghilakan Pedro dari list names_array
//maka caranya..
//kondisi dari filter adalah data yang memenulihi kondis atau true akan di keep

//di gunakan juga untuk searching 
names_array.filter((name)=>{
     return name != "Pedro" //artinya yang di keep value yang tidak sama dengan pedro

})


//5. Async + Await + Fetch , Promise


