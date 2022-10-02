// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

const guests = ["suleman ahmed", "Bilal", "Zia khan"];

guests.splice(0,0,"hamza ")
guests.splice(2,0,"jahanngir")
guests.push("khan")
console.log(guests)

console.log("hey guest we found a bigger dinner table.")

for (let index = 0; index <  guests.length; index++) {
    console.log(`Hi ${guests[index]} , you're invited to dinner.`);
  
}