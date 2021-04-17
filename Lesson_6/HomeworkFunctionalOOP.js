function Robot() {

	var self = this;

	self.name = 'Robot';
	self.kindOfWork = 'just work';

	self.setName = function(value) {
		self.name = value;
	}

	self.getName = function() {
		return self.name;
	}

	self.setKindOfWork = function(value) {
		self.kindOfWork = value;
	}

	self.getKindOfWork = function() {
		return self.kindOfWork;
	}

	self.work = function() {
		console.log('I ' + self.name + ' - I ' + self.kindOfWork);
	}
}

//-----------------------------------------------------------------

function CoffeRobot(){
	
	Robot.call(this);
	
	var self = this;

	self.name = 'CoffeRobot';
	self.kindOfWork = 'make coffee';
	
	
}

//-----------------------------------------------------------------

function RobotDancer(){
	
	Robot.call(this);
	
	var self = this;

	self.name = 'RobotDancer';
	self.kindOfWork = 'dance';
}

//-----------------------------------------------------------------

function RobotCoocker(){
	
	Robot.call(this);
	
	var self = this;

	self.name = 'RobotCoocker';
	self.kindOfWork = 'make cookies';
}

//-----------------------------------------------------------------

var r = new Robot();
var cr = new CoffeRobot();
var rd = new RobotDancer();
var rc = new RobotCoocker();

var allRobot = [r, cr, rd , rc];

for (var i = 0; i<allRobot.length; i++){
	allRobot[i].work();
}