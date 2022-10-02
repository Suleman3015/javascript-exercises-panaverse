// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


const hero = "Tom cruise"
const bestPlayer = "baBar azam"


// • Tests for equality and inequality with strings
if(hero == "Tom cruise"){
    console.log(true)
}else{
    console.log(false)
}


if(bestPlayer == "tom cruise "){
    console.log(true)
}else{
    console.log(false)
}


// • Tests using the lower case function
if(bestPlayer.toLowerCase() == "babar azam"){
    console.log(true)
}else{
    console.log(false)
}


if(bestPlayer.toLowerCase() == "tom cruise"){
    console.log(true)
}else{
    console.log(false)
}


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const marks = 24;

if(marks === 24){
    console.log(true)
}


if(marks !== 25){
    console.log("true marks is not 25")
}


// greater than less than
if(marks > 20){
    console.log("true  marks is greater than 20")
}


if(marks < 23){
    console.log("true marks is less than 20")
}else{
    console.log("false marks is not less than 23")
}


// greater than is equal to or less than is equal to

if(marks >= 24){
    console.log("true marks is greate than is equal to 24")
}

if(marks <= 23){
    console.log("true marks is less than equal to 23")
}else{
    console.log("false marks is not less than is equal to 23")
}


// • Tests using "and" and "or" operators
// true
if(marks === 24 && hero === "Tom cruise"){
    console.log(true)
}
// false
if(marks === 24 && hero === "babar cruise"){
    console.log(true)
}else{
    console.log(false)
}


// true
if(marks === 24 ||hero === "babar azan"){
    console.log(true)
}


// false
if(marks === 22 || hero === "babar cruise"){
    console.log(true)
}else{
    console.log(false)
}





// • Test whether an item is in a array

// • Test whether an item is not in a array

