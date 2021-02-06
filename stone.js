class Stone{
    constructor(x,y,radius){
        var options = {
       isStatic:false,
       restitution:1,
        friction:0.04,
        density:0.5
        }
        this.body = Bodies.circle(x, y, radius/2, options);
       this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        
        push();
        translate(this.body.position.x, this.body.position.y);
       rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2,this.radius*2);
        pop();
      }

}