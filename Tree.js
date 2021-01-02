class Tree {
  constructor(x, y){
    var options= {
      isStatic: true
    }
    this.body=Bodies.rectangle(x,y,100,100,options)
    this.image = loadImage("sprites/tree.png");
    World.add(world,this.body);
  }
display(){
  push();
  image(this.image,this.body.position.x,this.body.position.y,630,630);
  pop();
}
};