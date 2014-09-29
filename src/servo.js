// KPR Script file
exports.pins = {
	servo: { type: "PWM" }
}

exports.configure = function() {
	this.servo.init();
}

exports.rotate = function() {
	this.servo.write( .5 );
}

exports.rotate_time = function() {
	for(var i = 0;i<10;i++){
		setTimeout(this.servo.rotate(),1000);
	}
}

exports.stop = function() {
	this.servo.write( 0 );
}

exports.close = function() {
	this.servo.close();
}