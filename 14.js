// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
const guests = ["suleman ahmed", "Bilal", "Zia khan"];
console.log(guests)
// suleman ahmed can't make the dinner
const replace = guests[0]
guests[0] = "hamza ahmed"
for (let index = 0; index <  guests.length; index++) {
    console.log(`Hi ${guests[index]} , you're invited to dinner.`);
  
}

console.log(replace," you can't make the dinner")