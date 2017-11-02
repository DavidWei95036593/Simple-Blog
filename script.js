var button = document.getElementById("createblog");
button.addEventListener("click",function(){



var input = document.getElementById("text")
var newP = document.createElement("p");
newP.innerHTML = input.value;
var title = document.getElementById("title");
var newT = document.createElement("t");
newT.innerHTML = title.value;
var section = document.getElementById("main");
var deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
section.append(newT);
section.append(newP);
section.append(deleteButton);

})