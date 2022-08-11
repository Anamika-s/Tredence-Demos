console.log("Script3 file")

const students =[
  {name:"Deepak", subject:"English"},
  {name:"Sagar", subject:"Maths"},
  {name:"Lalit", subject:"English"}
]

function EnrollStudents (student, DisplayAllStudents)
{  setTimeout(()=>
  {
    students.push(student);
    console.log("Student is successfully registered")
    DisplayAllStudents(student)
  },2000)
  
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
EnrollStudents(student, DisplayAllStudents);
// DisplayAllStudents();