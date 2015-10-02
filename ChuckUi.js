	var ChuckUi = function()
	{
		this.sprite1 = new Sprite("ChuckUi.png");
		// width and height, 165, 126,// pixel height and width of single image 0.05, frame rate
		this.sprite1.buildAnimation(32 , 32 , 14 , 1 , 0.05,
			[1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
	}
	
	ChuckUi.prototype.update = function(deltaTime)
	{
	
	}