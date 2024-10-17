// Immediately Invoked Function Expressions (IIFE)
// we use iife to remove the pollution of global scope or its variable
(function chai(){
    console.log(`DB CONNECTED`);
})();
// chai()

// ( function aurcode()  {
//     console.log(`DB CONNECTED TWO`);
// }) (); //when we write two iife we have to put the semicolon in last

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// }) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('bharati')

