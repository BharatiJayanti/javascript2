//array
const myArr = [0,1,2,3,4,5]
const myHeroes = ["shakthiman","avengers"]

const myArr2 = new Array(1,2,3,4,5)
//Array methods

// console.log(myArr2[0]);//0 based indexing. it make shalow copy.//deep copy
// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)//addin in first
// myArr.shift()//removing 9
// console.log(myArr.includes(5)); //gives boolean
// console.log(myArr.indexOf(3));
//console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);//it converts the array into strings

//slice , splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) //it also manipultes original array
console.log("C",myArr);
console.log(myn2);















