function addListItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("taskList").appendChild(li);
  }
  document.getElementById("taskInput").value = "";
}
