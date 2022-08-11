// console.log("Start")
// console.log("Between")
// console.log("End")

// console.log("Start")

// setTimeout (() => 
// {
//  console.log("Some statements")
// }, 2000)

// console.log("End")

// var numbers = [1,2,3,4,5];
// console.log("Start")
// numbers.forEach(item=>
//   {
//     console.log(item)
//   }) 

//   console.log("End")


// console.log("Start")
// function getName(name)
// {
//    setTimeout(()=>
//    {
//  console.log("Inside GetName");
//  return "Hello " + name;
//    }, 2000)
// }

// var name=getName("Ajay");
// console.log(name)
// console.log("End")


console.log("Start")
function getName(name , callBack)
{
   setTimeout(()=>
   {
 console.log("Inside GetName");
 callBack(name)
   }, 2000)
}

getName("Ajay" , (name)=> { console.log("Hello "  + name)});

console.log("End")

