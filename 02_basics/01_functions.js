function sayMyName(){
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("I");
}
//sayMyName()
function addTwoNumbers(number1 , number2) //--> parameters
{

    // let result = number1 + number2
    return number1 + number2
    // console.log("Bharati") this statement never prit after return result it always print if we
    // put it before the return result
    // console.log(number1 + number2)
}
//addTwoNumbers(3,5)
const result =addTwoNumbers(3,5)
// console.log("Result:",result);

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("bharati"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))
const user={
    username:"Bharati",
    price: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
handleObject({
    username:"ronny",
    price : 500
})
const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));