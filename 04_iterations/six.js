const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach ( (item) => {
    //console.log(item);
    return item
})

//console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNums = []
//  myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
//  })


// console.log(newNums);

const books = [
    {title: 'Book one', genre: 'Non-Fiction', publish:1981,
    edition:1989},
    {title: 'Book two', genre: 'Fiction', publish:1999,
    edition:2000},
    {title: 'Book three', genre: 'Science', publish:2001,
    edition:2007},
    {title: 'Book four', genre: 'Non-Fiction', publish:2010,
    edition:2016},
    {title: 'Book five', genre: 'History', publish:2007,
    edition:2010},
    {title: 'Book six', genre: 'Science', publish:1990,
    edition:1997},
    {title: 'Book seven', genre: 'Non-Fiction', publish:2003,
    edition:2008},
    {title: 'Book eight', genre: 'History', publish:1987,
    edition:1996},
    {title: 'Book nine', genre: 'Science', publish:1981,
    edition:1989},
    
 



];
const userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks);