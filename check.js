function CheckIfDraw() {
	for(var x=0; x<9; x++) {

			if(flag[x] == 0) {
				return false;
			}
	}

	return true;
}
function CheckIfCorrect() {

		if(CheckIfDraw()) {
				text.value = ("draw");
				line.showLine = true;
		}

		if(player != false && flag[0] == 1 && flag[1] == 1 && flag[2] == 1) {

			line.rotation = 90 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y - 200;
			line.draw(context);
			text.value = ("Winner player 1");
			line.showLine = true;
		}
		else if(player != true && flag[0] == 2 && flag[1] == 2 && flag[2] == 2) {
			line.rotation = 90 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y - 200;
			line.draw(context);
			text.value = ("Winner player 2");
			line.showLine = true;
		}
		else if(player != false && flag[3] == 1 && flag[4] == 1 && flag[5] == 1) {
			line.rotation = 90 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 1");
			line.showLine = true;
		}
		else if(player != true && flag[3] == 2 && flag[4] == 2 && flag[5] == 2) {
			line.rotation = 90 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 2");
			line.showLine = true;
		}
		else if(player != false && flag[6] == 1 && flag[7] == 1 && flag[8] == 1) {
			line.rotation = 90 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y + 200;
			line.draw(context);
			text.value = ("Winner player 1");
			line.showLine = true;
		}
		else if(player != true && flag[6] == 2 && flag[7] == 2 && flag[8] == 2) {
			line.rotation = 90 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y + 200;
			line.draw(context);
			text.value = ("Winner player 2");
			line.showLine = true;
			
		}
		else if(player != false && flag[0] == 1 && flag[3] == 1 && flag[6] == 1) {
		
			line.x = array[4].x - 200;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 1");
			line.showLine = true;
		}
		else if(player != true && flag[0] == 2 && flag[3] == 2 && flag[6] == 2) {

			line.x = array[4].x - 200;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 2");
			line.showLine = true;
		}
		else if(player != false && flag[1] == 1 && flag[4] == 1 && flag[7] == 1) {

			line.x = array[4].x;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 1");
			line.showLine = true;
		}
		else if(player != true && flag[1] == 2 && flag[4] == 2 && flag[7] == 2) {
			
			line.x = array[4].x;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 2");
			line.showLine = true;
		}
		else if(player != false && flag[2] == 1 && flag[5] == 1 && flag[8] == 1) {

			line.x = array[4].x + 200;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 1");
			line.showLine = true;
		}
		else if(player != true && flag[2] == 2 && flag[5] == 2 && flag[8] == 2) {
			line.x = array[4].y + 200;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 2");
			line.showLine = true;
		}

		else if(player != false && flag[0] == 1 && flag[4] == 1 && flag[8] == 1) {
			line.rotation = -45 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y;
			line.draw(context);
			line.showLine = true;
			text.value = ("Winner player 1");
		}
		else if(player != true && flag[0] == 2 && flag[4] == 2 && flag[8] == 2) {
			line.rotation = -45 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 2");
			line.showLine = true;
		}
		else if(player != false && flag[2] == 1 && flag[4] == 1 && flag[6] == 1) {
			line.rotation = 45 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 1");
			line.showLine = true;
		}
		else if(player != true && flag[2] == 2 && flag[4] == 2 && flag[6] == 2) {
			line.rotation = 45 * Math.PI /180;
			line.x = array[4].x;
			line.y = array[4].y;
			line.draw(context);
			text.value = ("Winner player 2");
			line.showLine = true;
		} 
	
}