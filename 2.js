let myName = "suleman ahmed";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase().replace(/\b\w/g, myName=> myName.toUpperCase()));