// Think of something you could store in a array. For example, you could make a list of mountains, 
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const cities = []

function newCity(newCity){
    cities.push(newCity)
}

// you can add your item in to the list through the function
newCity("lahore")
newCity("karachi")
newCity("sharjah")
newCity("isl")

console.log(cities)