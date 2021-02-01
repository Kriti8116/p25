class Paper
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2 			
			}
		this.x=x;
		this.y=y;
		this.diameter=40;
		this.body=Bodies.circle(x, y, 20, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			ellipseMode(RADIUS)
			//strokeWeight(4);
			fill("blue")
			ellipse(0,0,this.diameter, this.diameter);
			pop()
			
	}

}