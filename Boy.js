class Boy{
  constructor(x,y){
    var options={
      isStatic: true
    }
    this.body=Bodies.rectangle(x,y,10,10,options);
    this.image = loadImage("sprites/boy.png");
    World.add(world,this.body);
  }

  display() {
      push();
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,250,250);  
      pop();
  }
}
