// Variables
var wakeuptime = 7;
var lunchtime = 12;
var naptime = 17;
var noon = 12;
var evening = 18;
var party = -1;

// Event
var timeEvent = $('#timeEvent');
var image = $('img');

// Clock
var clock = $('#clock');

// Selectors
var wakeup = $('#wake-up');
var lunch = $('#lunch');
var nap = $('#nap');

$(document).ready(function(){

	update();
	setInterval(update, 1000);
	partyTime();

	wakeup.change(() => {
		wakeuptime = wakeup.val();
	});

	lunch.change(() => {
		lunchtime = lunch.val();
	});
	
	nap.change(() => {
		naptime = nap.val();
	});
});

// Showing the current time
function getTime(){

	var currentTime = new Date();
	let hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();
	var meridian = "AM";

	if(hours >= noon){
		meridian = "PM";
	}

	if(minutes < 10){
		minutes = "0"+minutes;
	}

	if(seconds < 10){
		seconds = "0"+seconds;
	}

	var clockTime = `${hours}:${minutes}:${seconds} ${meridian}!`;
	clock.text(clockTime);

}

function update(){
	getTime();

	var time = new Date();
	var hours = time.getHours();

	if(noon > hours){
		message = '"Morning"';
		timeEvent.text(message).css('color', 'white');
		image.attr("src", "Jofridur/JFDR2.jpg").css('width', '40%');
	}

	if(noon <= hours){
		message = '"Good afternoon"';
		timeEvent.text(message).css('color', 'white');
		image.attr("src", "Jofridur/jfdr4.jpg").css('width', '40%');
	}

	if(evening <= hours){
		message = '"Evening"';
		timeEvent.text(message).css('color', 'white');
		image.attr("src", "Jofridur/Jofridur.jpg").css('width', '40%');
	}

	if(lunchtime == hours){
		message = '"Lets have some lunch"';
		timeEvent.text(message).css('color', 'white');
		image.attr("src", "Jofridur/Jfdr_ice.jpg").css('width', '40%');
	}

	if(wakeuptime == hours){
		message = '"Wake up sleepy head"';
		timeEvent.text(message).css('color', 'white');
		image.attr("src", "Jofridur/Jfdr_ice.jpg").css('width', '40%');
	}

	if(naptime == hours){
		message = '"Take a nap"';
		timeEvent.text(message).css('color', 'white');
		image.attr("src", "Jofridur/Jfdr_ice.jpg").css('width', '40%');
	}

	if(party == hours){
		message = '"Lets rock the house"';
		timeEvent.text(message).css('color', 'black');
		image.attr("src", "Jofridur/samaris.jpg").css('width', '40%');
	}

}

function partyTime(){
	var partyButton = $('#party');

	partyButton.click(() => {
		if(party < 0){
			party = new Date().getHours();
			partyButton.text("Finish party");
		}else{
			party = -1;
			partyButton.text("Let's rock the house");
		}
	});
}

