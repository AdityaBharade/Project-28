class Mango{
    constructor(x, y,r ) {
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1,
            'isStatic':true
        }
        this.r = r;
        
        this.body = Bodies.circle(x, y, r/2, options);
        this.image = loadImage("Images/mango.png");
       World.add(world, this.body);
      
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
       pop();
      }
}