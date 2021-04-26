class Iron{
	constructor(x,y,)
	{
	// assign options to the iron
		var options = {
		restitution:0.8,
		friction:3,
		density:30
	}
		this.x=x;
		this.y=y;
        this.width=20;
        this.height=60;
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the rectangle here to display the iron
			rect(0,0,this.width,this.height);

			pop();
	}

}