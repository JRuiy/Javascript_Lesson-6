function Robot() {
	var self = this;

	self.name = 'Robot';
	self.kindOfWork = 'just work';
}

Robot.prototype.setName = function(value) {
	self.name = value;
}

Robot.prototype.getName = function() {
	return self.name;
}

Robot.prototype.setKindOfWork = function(value) {
	self.kindOfWork = value;
}

Robot.prototype.getKindOfWork = function() {
	return self.kindOfWork;
}

Robot.prototype.work = function() {
	console.log('I ' + this.name + ' - I ' + this.kindOfWork);
}

//-----------------------------------------------------------------

function CoffeRobot(){
	
	var self = this;

	self.name = 'CoffeRobot';
	self.kindOfWork = 'make coffee';
}

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constuctor = CoffeRobot;

//-----------------------------------------------------------------

function RobotDancer(){
	
	var self = this;

	self.name = 'RobotDancer';
	self.kindOfWork = 'dance';
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constuctor = RobotDancer;

//-----------------------------------------------------------------

function RobotCoocker(){
	
	var self = this;

	self.name = 'RobotCoocker';
	self.kindOfWork = 'make cookies';
}

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constuctor = RobotCoocker;

//-----------------------------------------------------------------

var r = new Robot();
var cr = new CoffeRobot();
var rd = new RobotDancer();
var rc = new RobotCoocker();

var allRobot = [r, cr, rd , rc];

for (var i = 0; i<allRobot.length; i++){
	allRobot[i].work();
}