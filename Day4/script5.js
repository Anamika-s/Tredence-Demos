console.log("Ajax Calls")

var btnGetData = document.getElementById("btnGetData");
btnGetData.addEventListener('click', btnGetDataEvent)
const xhr = new XMLHttpRequest();
function btnGetDataEvent ()
{
   
// xhr.open("Get" , "test.txt")
xhr.open("Get", "https://jsonplaceholder.typicode.com/posts")
xhr.send(null);
// xhr.onprogress = function()
// {
//    console.log(xhr.readyState)
// } 

xhr.onload = function()
{
  document.getElementById("div1").innerHTML = xhr.responseText;
}
}

 
