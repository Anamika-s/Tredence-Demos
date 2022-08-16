console.log("Fetch Api")

var btnGetDataUsingFetchApi = document.getElementById("btnGetDataUsingFetchApi");
btnGetDataUsingFetchApi.addEventListener('click', btnGetDataUsingFetchApiEvent)

function btnGetDataUsingFetchApiEvent()
{
  fetch("test.txt").then((response)=>
  {
    console.log("Inside 1st then")
    console.log(response)
  return response.text()})
  .then(response=>
  {
    console.log("Inside 2nd then")
    console.log(response);
  })
}