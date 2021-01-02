class Ground{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,1360,20,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        stroke(100);
        fill(100);
        rect(this.body.position.x,this.body.position.y,1360,20);
    }
}