  class Elastic{

    constructor(abody,bpoint){
  
      var options = {
          bodyA: abody,
          pointB: bpoint,
          stiffness: 0.01,
          length : 10
      }
      this.pointB = bpoint;
      this.elastic = Constraint.create(options);
      World.add(world, this.elastic)
  }
  
  fly(){
    this.elastic.bodyA = null;
}
attach(body){

this.elastic.bodyA = body

}

  
  
    display(){
  if(this.elastic.bodyA){
  var pointA = this.elastic.bodyA.position
  var pointB = this.pointB
  
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
  }
  }
  }