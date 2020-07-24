class Polygon {
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        // this.width = width;
        // this.height = height;
        //this.poly=polygon;
      this.polygon=Bodies.circle(50,200,20);
      this.image = loadImage("polygon.png");
      World.add(world,this.polygon);

      
      
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      //fill("yellow")
      image(this.image,polygon.position.x,polygon.position.y,40,40)
      pop();

      
      
    }
  }



  