const user = {
    username: "bharati",
    price: 999,
    welcomeMessage: function(){
         console.log(`${this.username}, welcome to website`);//this means current context
         console.log(this);//this keyword talks about the current context

    }
}
// user.welcomeMessage()
// user.username = "sammy"
// user.welcomeMessage()

 //console.log(this);

//  function chai(){
//     let username = "bharati"
//     console.log(this.username);//this keyword i not workng in function
//  }
//  chai()

// const chai = function (){
//     let username = "bharati"
//     console.log(this.username);

 
// }
const chai =  () => {
    let username = "bharati"
    console.log(this);
    
     
    }


//chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1,num2) => num1 + num2 //implicit return

// const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2) => ({username:"bharati)"})

console.log(addTwo(3,4))

// const myArray = [2,5,3,7,8]
// myArray.forEach()