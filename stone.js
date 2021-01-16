class Stone{

    constructor(x,y,r){

     var options={
     isStatic : false ,
     restitution : 0.7,
     friction : 0.5 ,
     density : 0.1
     }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,this.r,options);
      this.image=loadImage("Images/stone.png");
      World.add(world,this.body);
    
    }
    display(){

    var pos = this.body.position;

     push()
     translate(pos.x,pos.y)
     
     strokeWeight(0);
     fill("red")
     imageMode(CENTER);
     image(this.image, 0, 0,50,50);
     pop()
    }

}