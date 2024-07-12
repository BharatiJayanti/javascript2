 // primitive

 // 7 types : String, Number , Boolean , mull , undefined , symbol , BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

const id = Symbol('123')
const anoId = Symbol('123')
console.log(id === anoId)

const bigNumber = 345672576257625765n

 // reference type(non primitives)

 //Array , objects , functions

 const heros = ["shaktimaan", "nagraj","doge"];
 let myObj = {
        name:"Bharati",
        age: 18,
 }

 const myFunction = function(){
    console.log("hello world");
 }
 console.log(typeof id);
 console.log(typeof bigNumber);
 console.log(typeof myFunction);
 

 // javasceipt is dynamically type language0