class irony
{

constructor(x,y,w,h)
{

this.width=w;
this.height=h;
this.body=Bodies.rectangle(x,y,w,h,{density:50,friction:20});
World.add(world,this.body);

}

display()
{
    rectMode(CENTER);
    fill(128);
    stroke (225);
    strokeWeight(4);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
}

    
}