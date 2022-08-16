console.log("Promise Demo")
const students =[
  {name:"Deepak", subject:"English"},
  {name:"Sagar", subject:"Maths"},
  {name:"Lalit", subject:"English"}
]

function EnrollStudents(student)
{
  return new Promise((resolve, reject)=>
  {
  const errror=false 
  setTimeout(()=>{
    if(!errror)
    {
     students.push(student);
    //  console.log("Student is registerd")
     resolve("Student is registerd")
    }
    else 
    reject("Some Error occured")
}, 2000)
})
}


function DisplayAllStudents()
{
  let str ="";
  setTimeout(()=>
  {  students.forEach((student) =>
  {
    str+= `<li> ${student.name}  -- ${student.subject} </li>`;

  // console.log(student.name + " " +  student.subject)
  })
  document.getElementById("studentsList").innerHTML= str;
}, 1000)

}

var student = { name:"Gagan", subject:"Maths"}
EnrollStudents(student).then((msg)=>
{
  console.log(msg)
  DisplayAllStudents();
}).catch((error)=>
{
  console.log(error)
})
