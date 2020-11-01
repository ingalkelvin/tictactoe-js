function Line() {

	this.x = 0;
	this.y = 0;
	this.color = "green";
	this.radius = 70;
	this.rotation = 0;
	this.showLine = false;
}

Line.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 5;
	context.rotate(this.rotation);
	context.fillStyle = this.color;
	context.strokeStyle = "yellow";

	context.beginPath();
	context.moveTo(20, 270);
	context.lineTo(-20, 270);
	context.lineTo(-20, -270);
	context.lineTo(20, -270);
	context.closePath();


	context.stroke();
	context.fill();

	context.restore();


	


};