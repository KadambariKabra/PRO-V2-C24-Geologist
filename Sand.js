class Sand {
    constructor(x,y,r){
        var options = {
            'restitution': 0.3,
            'friction': 5,
            'density': 1
        }
        this.body = Bodies.circle(x, y, (r-20)/2, options);
        this.radius = r
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}