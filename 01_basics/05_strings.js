const name = "bharati"
const repoCount = 50

//console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

//
const gameName = new String('bharatii')
const gameNameone = new String('bharatii-jk-com')
//console.log(gameName);
//onsole.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));
const newString = gameName.substring(1,4);
console.log(newString);

const anoString = gameName.slice(-8,4);
console.log(anoString);

const newStringone = "  jkkkk   ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://bharati.com/bharati%30jayanti"
console.log(url.replace('%30','-'));


console.log(url.includes('bharati'));
console.log(url.includes('jk'));

console.log(gameNameone.split('-'));











