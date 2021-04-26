class Stone{
	constructor(x,y)
	{
	// assign options to the stone
		var options = {
		restitution:0.8,
		friction:0.9,
		density:12
	}
		this.x=x;
		this.y=y;
		this.width=60;
        this.height=60;
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the rectangle here to display the stone
			rect(0,0,this.width,this.height);

			pop();
	}

}