console.log("Script File")

function ChangeToUpperCase() {

  var name = document.getElementById("txtName").value.toUpperCase();

  console.log(name)
}

function CountCharacters() {
  console.log(document.querySelector("#txtName").value.length);


}