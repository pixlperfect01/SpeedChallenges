function player(x, y){
  this.loc=createVector(x, y);
  this.vel=createVector(0, 0);
  this.acc=createVector(0, 0);
  this.jump=function(){
    this.vel
  }
}
function createVector(x_, y_){
  return new Vector(x_, y_);
}
function vector(x, y){
  this.x=x;
  this.y=y;
  this.add=function(a, b){
    if(!b){
      this.x+=a.x;
      this.y+=a.y;
    }else{
      this.x+=a;
      this.y+=b;
    }
  }
  this.subtract=function(a, b){
    if(!b){
      this.x-=a.x;
      this.y-=a.y;
    }else{
      this.x-=a;
      this.y-=b;
    }
  }
  this.mult=function(a){
    this.x*=a;
    this.y*=a;
  }
  this.div=function(a){
    this.x/=a;
    this.y/=a;
  }
}
setTimeout(setup,500);
var c,ctx,p;
function setup(){
  c=document.getElementById("c");
  ctx=c.getContext("2d");
  p=new Player();
  draw();
}

function draw(){
  
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
