function player(){
  this.x=0;
  this.y=0;
  this.up=function(){
    if(this.y>0){
      this.y--;
    }
  }
  this.down=function(){
    if(this.y<c.height){
      this.y++;
    }
  }
  this.right=function(){
    if(this.x<c.width){
      this.x++;
    }
  }
  this.left=function(){
    if(this.x>0){
      this.x--;
    }
  }
}

var c,ctx;
setTimeout(setup,500);
function setup(){
  c=document.getElementById("c");
  ctx=c.getContext("2d");
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
