function Object(x, y){
  this.pos=createVector(x, y);
  this.vel=createVector(0, 0);
  this.acc=createVector(0, 0);
  this.r=10;
  this.applyForce=function(f){
    this.acc.add(f);
  }
  this.update=function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
  this.show=function(){
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2*Math.PI);
    ctx.fill();
  }
}
function Water(x, y, w, h){
  this.pos=createVector(x, y);
  this.width=w;
  this.height=h;
  this.drops=[];
  for(var i=this.pos.x;i<this.w;i+=5){
    for(var j=this.pos.y;j<this.h;j+=5){
      drops.push(new WaterDrop(i, j));
    }
  }
}
function WaterDrop(x, y){
  this.pos=createVector(x, y);
  this.vel=createVector(0, 0);
  this.acc=createVector(0, 0);
}
function createVector(x_, y_){
  return new Vector(x_, y_);
}
function Vector(x, y){
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
function background(a, b, c, d){
  if(a&&!b&&!c&&!d){
    ctx.fillStyle="rgb("+a+","+a+","+a+")";
  }else if(a&&b&&!c&&!d){
    ctx.fillStyle="rgba("+a+","+a+","+a+","+b+")";
  }else if(a&&b&&c&&!b){
    ctx.fillStyle="rgb("+a+","+b+","+c+")";
  }else if(a&&b&&c&&d){
    ctx.fillStyle="rgba("+a+","+b+","+c+","+d+")";
  }
  ctx.fillRect(0, 0, 5000, 5000);
}
setTimeout(setup,500);
var c,ctx,obj,grav;
function setup(){
  c=document.getElementById("c");
  c.width=window.innerWidth;
  c.style.width=window.innerWidth;
  c.height=window.innerHeight;
  c.style.height=window.innerHeight;
  ctx=c.getContext("2d");
  obj=new Object(c.width/2, 0);
  grav=createVector(0,0.1);
  draw();
}
function draw(){
  background(255);
  obj.applyForce(grav);
  obj.update();
  obj.show();
  window.requestAnimationFrame(draw);
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
