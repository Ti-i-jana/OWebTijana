var addphoto;


var glavendiv;
var numph=5;
var krenilike=0;
function start(){
addphoto=document.getElementById("placeholder");
addphoto.addEventListener("click",addnewPic);

}

function addnewPic(){
    numph++;
    
    glavendiv=document.getElementById("imgcontainer");
    glavendiv.removeChild(document.getElementById("placeholder"));
    var picurl=  window.prompt("Vnesi Url na nova slika");
    var novplacehold=document.createElement("div");
    novplacehold.setAttribute("id","placeholder");
    var str=document.createElement("p");
    str.innerHTML="Add photo";
    novplacehold.appendChild(str);
    var novimg=document.createElement("img");
    novimg.setAttribute("src",picurl);
    novimg.setAttribute("id","img"+numph);
    novimg.classList.add("instaimg2");
    var novdiv=document.createElement("div");
    
    novdiv.appendChild(novimg);
    var newl=document.createElement("label");
    newl.innerHTML="Likes:";
    var newl1=document.createElement("label");
    newl1.innerHTML=0;
    newl1.setAttribute("id","img"+numph+"l");


    novdiv.appendChild(newl);
    novdiv.appendChild(newl1);

    glavendiv.appendChild(novdiv);
    novplacehold.addEventListener("click",addnewPic);
    glavendiv.appendChild(novplacehold);







}

function myfunc(event){
    var c=event.srcElement.id+"l";
    krenilike=document.getElementById(c);
    var num=krenilike.innerHTML;
   num++;
   krenilike.innerHTML=num;



}






window.addEventListener("load",start,false);