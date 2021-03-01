class hammer
{

constructor(x,y)
{

this.width=100;
this.height=50;
this.body=Bodies.rectangle(x,y,this.width,this.height);
World.add(world,this.body);

}

display()
{
    rectMode(CENTER);
    fill("yellow");
    stroke ("green");
    strokeWeight(3);
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    
}

    
}