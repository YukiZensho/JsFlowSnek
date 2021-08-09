


var Body="<p id=\"text\">Snek</p>";
var Length=30,speed=5,k;
var dot=[{'xpos':200,'ypos':100,'alpha':0.0}],xpos=0,ypos=0;
//Add the fruit
Body+="<div id=\"Fruit\"></div>";

//Initialize Snek
Body+="<div id=\"S0\"></div>";
for(var i=1;i<Length;i++){
    Body+="<div id=\"S"+i+"\"></div>";
    dot.push({'xpos':195-i*30,'ypos':100,'alpha':0.0});
}
document.getElementById("game").innerHTML=Body;
for(var i=0;i<Length;i++){
    document.getElementById("S"+i).style.position="absolute";
    document.getElementById("S"+i).style.width="20px";
    document.getElementById("S"+i).style.height="20px";
    document.getElementById("S"+i).style.margin="0px";
    document.getElementById("S"+i).style.padding="0px";
    document.getElementById("S"+i).style.borderRadius="50%";
    document.getElementById("S"+i).style.backgroundColor="#2f2";
}

    document.getElementById("S0").style.width="30px";
    document.getElementById("S0").style.height="30px";
SnkHead=document.getElementById("S0");

function Game(){
    //Get the angle between the head of the snake and the mouse
    dot[0].alpha=Math.abs(Math.atan((ypos-dot[0].ypos)/(xpos-dot[0].xpos)));
    
    //Move the head towards the player
    if((Math.abs(xpos-dot[0].xpos)>speed||Math.abs(ypos-dot[0].ypos)>speed)&&xpos&&ypos){
    dot[0].ypos+=(ypos>dot[0].ypos)?Math.sin(dot[0].alpha)*speed:-Math.sin(dot[0].alpha)*speed;
    dot[0].xpos+=(xpos>dot[0].xpos)?Math.cos(dot[0].alpha)*speed:-Math.cos(dot[0].alpha)*speed;
    SnkHead.style.top =dot[0].ypos+"px";
    SnkHead.style.left=dot[0].xpos+"px";
    for(var i=1;i<Length;i++){
        /*if(dot[i].alpha==0)dot[i].alpha=dot[0].alpha;
        else dot[i].alpha=(dot[i].alpha+dot[i-1].alpha)/2;*/
        dot[i].alpha=Math.abs(Math.atan((dot[i-1].ypos-dot[i].ypos)/(dot[i-1].xpos-dot[i].xpos)));
        k=(dot[i-1].ypos>dot[i].ypos)?Math.sin(dot[i].alpha)*speed:-Math.sin(dot[i].alpha)*speed;
        dot[i].ypos=dot[i-1].ypos-k;
        k=(dot[i-1].xpos>dot[i].xpos)?Math.cos(dot[i].alpha)*speed:-Math.cos(dot[i].alpha)*speed;
        dot[i].xpos=dot[i-1].xpos-k;
        document.getElementById("S"+i).style.top =dot[i].ypos+"px";
        document.getElementById("S"+i).style.left=dot[i].xpos+"px";
    }
    }
}

setInterval(Game, 13);
 
document.addEventListener('mousemove', (event) => {
	xpos=event.clientX-15;
    ypos=event.clientY-15;

});


/*
SnkHead=document.getElementById("SnkHead");
Body+="<img id=\"S"+Length+"\" src=\"png/snek.png\" width=\"20\" height=\"20\">";
document.getElementById("game").innerHTML=Body;
*/