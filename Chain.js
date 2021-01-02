class Chain{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.06,
            length: 5
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
        this.chain.bodyB=body;
    }

    fly(){
        this.chain.bodyB=null;
    }
    display(){
    if(this.chain.bodyB){
        var pointA = this.chain.pointA;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}