class CanClass {
    constructor(x,y,width,height){
var options = {
    isStatic:true
}
   
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("dustbingreen.png");
}
display(){
    push();
    rectMode(CENTER)
    rect(this.width, this.height);
}
}