function Circle() {

	this.x = 0;
	this.y = 0;
	this.color = "red";
	this.radius = 70;
}

Circle.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 5;
	context.fillStyle = this.color;
	context.strokeStyle = "yellow";

	context.beginPath();
	context.arc(0,0,this.radius,0,(Math.PI*2),true);
	context.closePath();


	context.stroke();
	context.fill();

	context.restore();


	


};