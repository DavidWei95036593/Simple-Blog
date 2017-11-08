let button = document.getElementById("createblog");
button.addEventListener("click",function(){

let input = document.getElementById("textarea")
let newP = document.createElement("p");
newP.innerHTML = input.value;
let section = document.getElementById("main");

let title = document.getElementById("maintitle");
let newT = document.createElement("t");
newT.innerHTML = title.value;
let t1 = document.getElementById("head");


let Ex = document.getElementById("error");

let numoftime = "0";
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

let deleteButton = document.createElement("button");
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
  console.log(sections);
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





















