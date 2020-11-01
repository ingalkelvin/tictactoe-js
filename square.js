function Square() {

	this.x = 0;
	this.y = 0;
	this.color = "blue";

}

Square.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 2;
	context.fillStyle = this.color;

	context.beginPath();
	context.moveTo(80, 80);
	context.lineTo(-80, 80);
	context.lineTo(-80, -80);
	context.lineTo(80, -80);
	context.closePath();


	context.stroke();
	context.fill();

	context.restore();


};