// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
// \ Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size, text) {
  if (size === "large" || size === "mediam") {
    text = "i love javascript";
  }

  console.log(`this size of the Tshirt is ${size} and the message printed on it is ${text}`
  );
}
make_shirt("small", "i love pakistan");
