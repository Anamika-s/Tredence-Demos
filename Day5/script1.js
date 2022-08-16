// console.log("Start")
// console.log("Between")
// console.log("End")


console.log("Start")

// Regular / Normal Function
// function Hello()
// {
//  return "hello";
// }

// Anonymous Method
// const Hello = function()
// {
//   return "hello "
// }

// To shorten Anonymous Method, we can use Arrow Function

// const Hello = () =>
// {
//    return "hello";
// }


const Hello = () => "hello";

const Add = (n1,n2) => n1+n2;
const Subtract = (n1,n2) => {return n1 - n2;}

console.log(Hello());
console.log(Add(2,3));