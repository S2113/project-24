class sand
{

constructor()
{
this.x=random(20,1190);
this.y=random(20,680);
this.r=random(0,10);
this.body=Bodies.circle(this.x,this.y,this.r,{restitution:1.3,friction:5,density:1});
World.add(world,this.body);
}

display()
{
    ellipseMode(RADIUS);
    fill("red");
    stroke ("blue");
    strokeWeight(2);
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    
    
}

    
}