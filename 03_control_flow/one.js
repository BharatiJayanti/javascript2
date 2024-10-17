// if
// const isUserloggedIn = true
// const temperature = 41

// if(temperature > 50){ // if true the inner code will be executed or if it is false then inner code is not executed
//       console.log("less than 50"); 

// }
// else{
//     console.log("Temperature is greater than 50");
// }
// console.log("execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

//const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2"); don't do this

// if (balance < 500){
//     console.log("less than 500")

// } else if (balance < 750){
//     console.log("less than 750")
// } else{
//     console.log("lesss than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}