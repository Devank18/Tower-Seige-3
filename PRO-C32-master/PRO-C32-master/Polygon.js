class Polygon {
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius


        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);

      }

      display(){

        //var angle = this.body.angle;

        push();

        translate(this.body.position.x, this.body.position.y);

        //rotate(angle);

        ellipseMode(CENTER)

        fill(255,255,0);

        ellipse(x, y,this.radius);

        pop();

      }
}