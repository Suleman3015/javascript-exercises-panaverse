// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

const newOrder  =  ["small sandwich","larege sandwich","mediam sandwich"]
const order  =  ["chicken sandwich","chessy sandwich",]
const order2  =  ["egg sandwich","small sandwich"]

function Order(ordersandwiches){
console.log(`the sandwiches order list is (${ordersandwiches} )`)
}

Order(newOrder)
Order(order)
Order(order2)