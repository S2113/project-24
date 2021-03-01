class ground
{

constructor(x,y,w,h)
{

this.width=w;
this.height=h;
this.body=Bodies.rectangle(x,y,w,h,{isStatic:true,density:2.83,friction:20,gravity:9.8});
World.add(world,this.body);

}

display()
{
    rectMode(CENTER);
    fill("brown");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
}

    
}