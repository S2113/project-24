class rubber
{

constructor(x,y)
{
this.r=45;
this.body=Bodies.circle(x,y,this.r,{restitution:0.3,friction:5,density:1});
World.add(world,this.body);
}

display()
{
    ellipseMode(RADIUS);
    fill(225);
    stroke ("yellow");
    strokeWeight(3);
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    
    
}

    
}