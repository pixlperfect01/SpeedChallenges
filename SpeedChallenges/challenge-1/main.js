function player(){
  this.x=0;
  this.y=0;
  this.up=function(){
    if(this.y>0){
      this.y--;
    }
  }
  this.down=function(){
    if(this.y<c.height-50){
      this.y++;
    }
  }
  this.right=function(){
    if(this.x<c.width-50){
      this.x++;
    }
  }
  this.left=function(){
    if(this.x>0){
      this.x--;
    }
  }
  this.draw=function(){
    ctx.fillStyle="#FF0000";
    ctx.fillRect(this.x,this.y,50,50);
  }
}

function enemy(x, y){
  this.x=x;
  this.y=y;
  this.move=function(m){
    this.x+=Math.trunc(Math.random()*(m*2))-m;
    this.y+=Math.trunc(Math.random()*(m*2))-m;
    if(this.x<0)
      this.x=0;
    if(this.x>c.width-20)
      this.x=c.width-20;
    if(this.y<0)
      this.y=0;
    if(this.y>c.height-20)
      this.y=c.height-20;
  }
  this.draw=function(){
    ctx.fillRect(this.x,this.y,20,20);
  }
}

var c,ctx,p,e=[];
setTimeout(setup,500);
function setup(){
  c=document.getElementById("c");
  ctx=c.getContext("2d");
  p=new player();
  e.length=10;
  for(var i=0;i<e.length;i++){
    e[i]=new enemy(Math.trunc(Math.random()*(c.width-150))+100,Math.random()*(c.height-150))+100);
  }
  draw();
}

function draw(){
  if(keys.up)
    p.up();
  if(keys.down)
    p.up();
  if(keys.left)
    p.up();
  if(keys.right)
    p.up();
  for(var i=0;i<e.length;i++){
    e[i].move((1/3));
    e[i].draw();
  }
  p.draw();
}





var keys = { 
up: false, 
down: false, 
left: false, 
right: false 
} 
function keyUpdate(keyEvent, down) { 
console.log(keyEvent.keyCode);
switch (keyEvent.keyCode) { 
case 38: keys.up = down; 
break; 
case 40: 
keys.down = down; 
break; 
case 37: 
keys.left = down; 
break; 
case 39: 
keys.right = down; 
break; 
} 
} 
document.addEventListener("keydown", function(event) { 
keyUpdate(event, true); 
}); 
document.addEventListener("keyup", function(event) { 
keyUpdate(event, false); 
});
