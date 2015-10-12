var yesCount = 0;
var temperature = prompt("Is it below 30 degrees outside?");
var precipitation = prompt("Is there crap falling from the sky?");
var sniffles = prompt("Is there something going around at the office?");
var meetings = prompt("Do you have any meetings?");
var summerFriday =	prompt("Is it a summer Friday?");
var subway = prompt("Train delayed?");
var weekendBrain = 0;

switch(temperature) {
	case 'yes':
		yesCount++;
		break;
	case 'no':
		break;
}

switch(precipitation) {
	case 'yes':
		yesCount++;
		break;
	case 'no':
		break;
}

switch(sniffles) {
	case 'yes':
		yesCount++;
		break;
	case 'no':
		break;	
}

switch(summerFriday) {
	case 'yes':
		yesCount++;
		weekendBrain++;
		break;
	case 'no':
		break;
}

switch(subway) {
	case 'yes':
		yesCount++;
		break;
	case 'no':
		break;
}

var stayHome = ['do standup remotely, and then get the f*ck back into bed', 'don\'t even think about it', 'nah'];
var randomNumber = stayHome[Math.floor(Math.random() * stayHome.length)];

if (yesCount > 2) {
	alert(randomNumber);
} else if (weekendBrain == 1){
	alert("It\'s summer friday. it would be counterproductive for you to go in at this point.");
} else {
	alert("get your lazy ass to work.");
}



