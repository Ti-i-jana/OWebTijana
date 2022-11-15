var bunhop;
var torthop;
var bun;
var tort;
var momentalnob;
var momentalnot;
var gob;
var got;
function start(){

var timedisp=document.getElementById("timedisplay");
const buttstar=document.getElementById("start");
var buttpause=document.getElementById("pause");

var timeelapsed=0;


var paused=true;
var intervalid;
 momentalnob=1;
 momentalnot=1;

 gob=0;
 got=0;

buttstar.addEventListener("click",starclicked,false);

function starclicked(){
    
if(paused){
paused=false;
intervalid=setInterval(() => {
    timeelapsed++;
    timedisp.textContent="Seconds passed:"+timeelapsed;
    bunhop=Math.floor(Math.random()*9+1);
    torthop=Math.floor(Math.random()*9+1);

    bun=document.getElementById("img"+momentalnob);
    bun.setAttribute("src","640px-HD_transparent_picture.png");


    if(bunhop>=1&&bunhop<=2){
        gob=0;
    }else{

        if(bunhop>=3&&bunhop<=4){
            gob=9;
        }else{
            if(bunhop>=6&&bunhop<=8){
            gob=1;}
            else{
                if(bunhop==5){
                    gob=-10;
                }else{
                    gob=-2;                }

            }
        }
    }





    momentalnob=momentalnob+gob;
    if(momentalnob<=0){

        momentalnob=1;
    }

   
    bun=document.getElementById("img"+momentalnob);
    bun.setAttribute("src","bunny.png");
    if(momentalnob>=70){
        alert("bunny won");
        clearInterval(intervalid);

            }
            

    tort=document.getElementById("img"+momentalnot);
    tort.setAttribute("src","640px-HD_transparent_picture.png");
    
    if(torthop>=1&&torthop<=5){
        got=3;
    }else{

        if(torthop>=6&&torthop<=7){
            got=6;
        }else{
            got=-1;
        }
    }
    momentalnot=momentalnot+got;
    if(momentalnot<=0){
        momentalnot=1;
    }
    if(momentalnot>=70){
        alert("turtle won");
        clearInterval(intervalid);

    }
    tort=document.getElementById("img"+momentalnot);
    tort.setAttribute("src","tortoise.png");
    
    if(momentalnob==momentalnot){
        alert("ouch");
                
            }
           
   

    
}, 1000);

}


}

buttpause.addEventListener("click",pauseclicked);
function pauseclicked(){
    
if(!paused){
paused=true;
clearInterval(intervalid);

}


}



}
window.addEventListener("load",start,false);