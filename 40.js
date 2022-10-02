// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



const magician = ["penn","teller","dynamo","apollo"]
function show_magicians(magNames){
    for (let index = 0; index < magNames.length; index++) {
        const mag = magNames[index];
        console.log(`${mag}`)
     }
}


show_magicians(magician)