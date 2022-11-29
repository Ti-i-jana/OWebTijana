var addnp;


function start(){
addnp=document.getElementById("addnewpost");
addnp.addEventListener("click",addnew);


}
function addnew(){
  
var textar=document.getElementById("textar");
var novdiv=document.createElement("div");
var newimg=document.createElement("div");
newimg.classList.add("instaimg3");
novdiv.classList.add("interestdiv");
novdiv.appendChild(newimg);
var novp=document.createElement("p");
novp.innerHTML=textar.value;
novp.classList.add("interestdivp");
novdiv.appendChild(novp);
var glavendiv=document.getElementById("interestcontainer");
glavendiv.removeChild(document.getElementById("addpost"));
glavendiv.appendChild(novdiv);

var novddiv=document.createElement("div");
novddiv.setAttribute("id","addpost");
var novta=document.createElement("textarea");
novta.style.width="1200px";
novta.style.marginTop="30px";
novta.style.fontFamily="Georgia, 'Times New Roman', Times, serif";
var novbr=document.createElement("br");
var novlabel=document.createElement("label");
novlabel.innerHTML="New Post";
novlabel.classList.add("addnewpost");

novlabel.setAttribute("id","addnewpost");
novddiv.setAttribute("id","addpost");
novlabel.addEventListener("click",addnew);
novddiv.appendChild(novta);
novddiv.appendChild(novbr);
novddiv.appendChild(novlabel);
glavendiv.appendChild(novddiv);



}









window.addEventListener("load",start);