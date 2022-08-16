console.log("Script6")
var btnGetComments = document.getElementById("btnGetComments");
btnGetComments.addEventListener('click', PopulateComments)

var xhr = new XMLHttpRequest(); 
function PopulateComments()

{
   xhr.open("get", "http://localhost:3000/employees")
  //  xhr.open("Get", "https://jsonplaceholder.typicode.com/comments")

   xhr.onload = ()=>
   {
     
     var str ="";
     let response =  JSON.parse(xhr.responseText);
     console.log(response)
   for (key in response)
   {
    str+= `<li> ${response[key].body} <li>`
   } 

document.getElementById("commentsList").innerHTML = str;

   }
    xhr.send();
}