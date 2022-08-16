console.log("Fetch Api")

var btnGetDataUsingFetchApi = document.getElementById("btnGetDataUsingFetchApi");
btnGetDataUsingFetchApi.addEventListener('click', btnGetDataUsingFetchApiFunction)

var btnPostDataUsingFetchApi = document.getElementById("btnPostDataUsingFetchApi");
btnPostDataUsingFetchApi.addEventListener('click', btnPostDataUsingFetchApiFunction)

function btnGetDataUsingFetchApiFunction()
{
   fetch("https://jsonplaceholder.typicode.com/comments").then((response)=>
   {
   return response.json()
   }).then (response =>
   {
    console.log(response)
   });
}

function btnPostDataUsingFetchApiFunction()
{
  var url ="https://reqres.in/api/users";
  var data =    {"name": "ajay",
  "job": "developer"};

  var obj = {

    method:'post',
    headers:{
      "Content-type":'application/json'
    },
    body:data,
   
     }

      fetch(url, obj).then(response=>
      {return response.text();
    }). then(response=>
    {
      // console.log(response)
    }).catch(error=>
      {
        console.log('error : ' , error)
      })
}