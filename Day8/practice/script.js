const postlist = document.querySelector(".postlist")

const url ="http://localhost:3000/posts";
const posturl ="http://localhost:3000/favorites";

let output="";

// Get 
var postList=[]
fetch(url)
.then(res=> res.json())
.then(data=>{
  data.forEach(post =>
    {
      postList.push(post);
      // console.log(post.title)
output+= `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${post.title}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${post.body} </h6>
  <p class="card-text">${post.body}</p>
  <a href="#" class="card-link" onClick="AddPost(${post.id})"> Add to Fav </a>
  <a href="#" class="card-link">Another link</a>
</div>`;
});
postlist.innerHTML= output;
})

function AddPost(id)
{
  console.log("Function called")
   console.log(id)
   var post = getPostById(id)
  //  post.id = postList.length+1;
// console.log("POST FOUND" ,  post)
  fetch(posturl, 
    {
      method:'POST',
      headers:{
        'Content-Type' :'application/json',
        'Accept' :'application/json'
      },
      body:  JSON.stringify(post)
    }).then(response=> response.json())
     .then(data=>
      {
        console.log(data)
      })
      

}
 


function RemoveFromFav(id)
{ 
  fetch(posturl+"/"+id, 
    {
      method:'DELETE',
      headers:{
        'Content-Type' :'application/json',
        'Accept' :'application/json'
      },
     }).then(response=> response.json())
     .then(data=>
      {
        console.log(data)
      })
      

}
 
function getPostById(id)
{
  for(let post in postList)
  {
    if(postList[post].id == id)
    return postList[post];
  }
}
