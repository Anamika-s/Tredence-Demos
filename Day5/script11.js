console.log("Async Await Demo")

// function hello()
// {
//   return "hello";
// }

async function hello()
{
  console.log("Inside Hello")
  // const response = await fetch("http://localhost:3000/users");
  const response  = await fetch("test.txt")
  console.log("After Calling api")
  const responseText = await response.text();
  return responseText;
}

console.log("Before Calling hello")
// let a = hello();
hello().then((response)=> {console.log(response)})
console.log("After Calling hello")
// console.log(a)
console.log("This is last statement of this script")
