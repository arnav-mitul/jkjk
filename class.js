
  


class box {
  constructor(x,y,width,height){
    var op1={
       isStatic:true
    }
  this.body=Bodies.rectangle(x,y,width,height,op1)

  this.width=width;
  this.height=height;

  World.add(world,this.body)
  }
  display(){
var uio =this.body.position;
rectMode(CENTER);
fill("red");
rect(uio.x,uio.y, this.width, this.height);
  }
}










