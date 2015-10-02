	var ChuckUi = function()
	{
		this.sprite1 = new Sprite("ChuckUi.png");
		// width and height, 165, 126,// pixel height and width of single image 0.05, frame rate
		this.sprite1.buildAnimation(32 , 32 , 14 , 1 , 0.05,
			[65,66,67,68,69,70,71,72,73,74,75,76,77,78]);
	}
	
	ChuckUi.prototype.update = function(deltaTime)
	{
	
	}