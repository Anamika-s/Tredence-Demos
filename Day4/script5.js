console.log("Ajax Calls")

var btnGetData = document.getElementById("btnGetData");
btnGetData.addEventListener('click', btnGetDataEvent)

var btnPostData = document.getElementById("btnPostData");
btnPostData.addEventListener('click', btnPostDataEvent)

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

 
// Post Data
function btnPostDataEvent()
{
  console.log("clicked")
  var obj = {
    "name": "ajay",
    "job": "developer"
      };
      xhr.getResponseHeader("Content-Type","application/json")
     xhr.open("Post", "https://reqres.in/api/users");
    //  xhr.onprogress = function()
    //  {

    //  }

     xhr.onload = () =>
     {
      console.log(xhr.responseText)
     }
xhr.send(obj);
}



