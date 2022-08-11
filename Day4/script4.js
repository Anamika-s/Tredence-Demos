console.log("Ajax Calls")

var btnGetData = document.getElementById("btnGetData");
btnGetData.addEventListener('click', btnGetDataEvent)
const xhr = new XMLHttpRequest();
function btnGetDataEvent ()
{
  console.log("Button is clicked")
 
   
 console.log(xhr.readyState)
// xhr.open("Get" , "test.txt")
xhr.open("Get", "https://jsonplaceholder.typicode.com/posts")
console.log(xhr.readyState)
xhr.onreadystatechange = readyStateChange;
  xhr.send(null);
}

function readyStateChange()
{
  // console.log("State is changing")
  // console.log(xhr.readyState)
  if(xhr.readyState==4 && xhr.status==200)
  
  {console.log("Response received")
 console.log(xhr.responseText)
 document.getElementById("div1").innerHTML = xhr.responseText;
}
}

