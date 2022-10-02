// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.

const magician = ["penn","teller","dynamo","apollo"]
function make_great(names){
    // names.forEach((element, "Great") => {
    //     names[index] = element + index;
    //   });
    for (let index = 0; index < names.length; index++) {
        const mag = names[index];
        // console.log(`${mag}`)
        names[index] = `Great ${mag} `
     }

}

make_great(magician)
console.log(magician)