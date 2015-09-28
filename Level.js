
var level = {
 "height":15,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 173, 0, 173, 0, 173, 0, 173, 0, 173, 172, 0, 0, 0, 0, 1, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 2, 0, 33, 0, 16, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 16, 0, 0, 0, 16, 0, 16, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 16, 0, 16, 0, 0, 184, 0, 0, 165, 0, 0, 0, 36, 0, 16, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 0, 44, 0, 44, 0, 44, 0, 44, 0, 44, 0, 44, 0, 44, 0, 44, 0, 45, 0, 168, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":15,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "properties":
    {

    },
 "renderorder":"right-down",
 "tileheight":35,
 "tilesets":[
        {
         "firstgid":1,
         "image":"..\/AppData\/Local\/Temp\/7zEC66B.tmp\/tileset.png",
         "imageheight":1024,
         "imagewidth":1024,
         "margin":2,
         "name":"tileset",
         "properties":
            {

            },
         "spacing":2,
         "tilecount":196,
         "tileheight":70,
         "tilewidth":70
        }],
 "tilewidth":35,
 "version":1,
 "width":20
}



var LAYER_COUNT = level.layers.length;
var MAP = {

tw: level.width, 
th: level.height

};

var TILE = 35; 

var TILESET_TILE = TILE * 2;
var TILESET_PADDING = 2;
var TILESET_MARGIN = 2;

var TILESET_COUNT_X = 14;
var TILESET_COUNT_Y = 14;

var tileset = document.createElement('img');
tileset.src = "tileset.png";

function drawMap()
{
			for(var layerIdx = 0; layerIdx < LAYER_COUNT; layerIdx++)
			{
				var idx = 0;
				for (var y = 0; y < level.layers[layerIdx].height; y++)
				{	
					for (var x = 0; x < level.layers[layerIdx].width; x++)
					{
						if (level.layers[layerIdx].data[idx] != 0)
						{
								var tileIndex = level.layers[layerIdx].data[idx] -1;
										
										var sx = TILESET_PADDING + (tileIndex % TILESET_COUNT_X) * (TILESET_TILE + TILESET_PADDING);
										var sy = TILESET_PADDING + (Math.floor( tileIndex / TILESET_COUNT_Y))*(TILESET_TILE + TILESET_PADDING);
										
										context.drawImage (tileset, sx, sy, TILESET_TILE, TILESET_TILE, x*(TILE), (y-1) * (TILE), TILESET_TILE, TILESET_TILE); 
						}
						
						idx++;
					}
	
				}
			}

}










