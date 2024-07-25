//Dates4

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


//let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date("2024-07-23")
let myCreatedDate = new Date("07-23-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);// for exact time
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//converting in sec


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default ,{
    weekday:"long",
   
})

