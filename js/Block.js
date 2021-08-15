class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            // set the isStatic property 
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity= 255

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
       
       if(this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
       }
       else{
        World.remove(world,this.body);
        rectMode(CENTER);
        push();
        noStroke();
        this.visiblity = this.visiblity - 5
        fill(255,0,0,this.visiblity)
        rect(pos.x,pos.y,this.width, this.height);
        pop();
       }
      }

}