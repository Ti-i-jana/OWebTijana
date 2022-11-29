var s1;
var s2;
var s3;
var s4;
var addcomm;

function start(){
s1=document.getElementById("submitdate1");
s2=document.getElementById("submitdate2");
s3=document.getElementById("submitdate3");
s4=document.getElementById("submitdate4");
var currdate=new Date();
s1.innerHTML="Submitted:"+currdate.getHours()+":"+currdate.getMinutes()+":"+currdate.getSeconds()+", "+currdate.getMonth()+"/"+currdate.getDate()+"/"+currdate.getFullYear();
s2.innerHTML="Submitted:"+currdate.getHours()+":"+currdate.getMinutes()+":"+currdate.getSeconds()+", "+currdate.getMonth()+"/"+currdate.getDate()+"/"+currdate.getFullYear();
s3.innerHTML="Submitted:"+currdate.getHours()+":"+currdate.getMinutes()+":"+currdate.getSeconds()+", "+currdate.getMonth()+"/"+currdate.getDate()+"/"+currdate.getFullYear();
s4.innerHTML="Submitted:"+currdate.getHours()+":"+currdate.getMinutes()+":"+currdate.getSeconds()+", "+currdate.getMonth()+"/"+currdate.getDate()+"/"+currdate.getFullYear();
addcomm=document.getElementById("addcomment");
addcomm.addEventListener("click",addnewcom);
}

function addnewcom(){
    var curr=new Date();
    var newd=document.createElement("div");
    var newl=document.createElement("label");
    newd.style.marginBottom="40px"
var newc=document.createElement("p");
var textar=document.getElementById("addcomm");
var glaven=document.getElementById("commcontainer");
newl.innerHTML="Submitted:"+curr.getHours()+":"+curr.getMinutes()+":"+curr.getSeconds()+", "+curr.getMonth()+"/"+curr.getDate()+"/"+curr.getFullYear();
newc.innerHTML=textar.value;
textar.value="";
newd.appendChild(newc);
newd.appendChild(newl);
glaven.appendChild(newd);







}








window.addEventListener('load',start);