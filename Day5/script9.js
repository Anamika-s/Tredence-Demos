console.log("Promise Demo")

// 1. Pending
// 2. Resolved
// 3. Rejected

// Producing Code
function func1()
{
  //  return new Promise(function(resolve, reject)
 return new Promise((resolve , reject) =>
 {
     setTimeout(()=>
     {
       const error = false;
       if(!error)
          // console.log("Your promise has beed resolved")
          resolve("Your promise has beed resolved");
          else 
          reject("Some Error occured");
     }, 2000)
   })
 
}

// func1();

// Consuming Part / Calling Part
func1().then((msg)=>
{
  console.log(msg)
  console.log("Promise fullfilled")
}).catch((errorMsg)=>
{
  console.log(errorMsg)
  console.log("Promise not fullfilled")
})
 
