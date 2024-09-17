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
    return ${username} just logged in'
}
console.log(loginUserMessage("bharati"))