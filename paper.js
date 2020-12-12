var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
class PaperClass{
constructor(x,y,radius){
var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
this.body = Bodies.circle(x, y, radius, options);
this.x = 100;
this.y = 600;
this.radius = 70;
this.image = loadImage("paper.png");
World.add(world, this.body);

}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(CENTER);
    pop();
}
}