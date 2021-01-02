
class Stone{
    constructor(x, y,width,height){
      var options={
        isStatic: false,
        restitution: 0,
        friction: 1,
        density: 1.2
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("sprites/stone.png");
      World.add(world,this.body);
      this.width=width;
      stoneWidth=this.width;
    }
  display(){
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,60,60);
    pop();
  }
  };
  