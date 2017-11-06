var button = document.getElementById("createblog");
button.addEventListener("click",function(){

var input = document.getElementById("textarea")
var newP = document.createElement("p");
newP.innerHTML = input.value;
var section = document.getElementById("main");

var title = document.getElementById("maintitle");
var newT = document.createElement("t");
newT.innerHTML = title.value;
var t1 = document.getElementById("head");


var Ex = document.getElementById("error");

var numoftime = "0";
if(input.value === "" && title.value ==="" ){
	if(numoftime ==="0"){
	Ex.append("You have to text something to be able to post");
	}numoftime = "1";
}
	else{
t1.append(newT);
section.append(newP);

input.value = "";
title.value = "";

var deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
deleteButton.addEventListener("click",function(){
	t1.removeChild(newT);
	section.removeChild(newP);
	section.removeChild(deleteButton);})
  section.append(deleteButton);
}
})





function hideAll(){
  const sections = document.querySelectorAll("section.tabs");
  for(let i = 0; i < sections.length; i++){
    if(!sections[i].className.match(" hidden")){
        sections[i].className += " hidden";
      }
    }
}

function unhide(element){
  element.className = element.className.replace(" hidden", "");

}

function bindEventListeners() {
  let menuItems = document.querySelectorAll("nav button");
  for(let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("click",function(){
      hideAll();
      const className = menuItems[i].className;
      const section = document.querySelector("section." + className);
      unhide(section);
    })
  }
}




bindEventListeners();





















