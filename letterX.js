function LetterX() {

	this.x = 0;
	this.y = 0;
	this.color = "red";

}

LetterX.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 2;
	context.fillStyle = this.color;
	context.strokeStyle = "yellow";

	context.beginPath();
	context.moveTo(-10, 0);
	context.lineTo(-75, -75);
	context.lineTo(-55, -75);
	context.lineTo(0, -10);
	context.lineTo(55, -75);
	context.lineTo(75, -75);
	context.lineTo(10, 0);
	context.lineTo(75, 75);
	context.lineTo(55, 75);
	context.lineTo(0, 10);
	context.lineTo(-55, 75);
	context.lineTo(-75, 75);

	context.closePath();


	context.stroke();
	context.fill();

	context.restore();


};