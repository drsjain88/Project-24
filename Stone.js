class Stone {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction': 0.5,
        'restitution':1.0
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 70;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  