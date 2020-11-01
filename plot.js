function PlotDrawing() {


	for(var i=0; i<9; i++) {

		if((mouse.x >= array[i].x-80 && mouse.x <= array[i].x+80) && (mouse.y >= array[i].y-80 && mouse.y <= array[i].y+80)) {
			

				if(flag[i] == 0)
				{
					if(player != true)
					{
						circle.x = array[i].x;
						circle.y = array[i].y;

						circle.draw(context);
					}
					else
					{
						x.x = array[i].x;
						x.y = array[i].y;

						x.draw(context);
					}
					flag[i] = (player==false) ? 1 : 2;
					player = (player==false) ? true : false;
					text.value = (player==false) ? "Current Player: 1" : "Current Player: 2";
				}
				
					console.log(array[i].x + " "+array[i].y);
				
				break;
			}
		}
	}
