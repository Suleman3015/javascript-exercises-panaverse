// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, 
//  such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

function carDetail(manufacturer, model,...optionalInfo) {
    let car = {
      manufacturer,
      model,
      optionalInfo,
    };
    console.log(car)
  }
  
carDetail("honda", "civic", { color: "black"})
carDetail("suzuki", "mehran", { engine: "2500 cc", demang: "1 crore" })
carDetail("Honda", "Civic", { color: "green"}, { year: 2010 })
  