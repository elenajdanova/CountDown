function countDown() { 

		let timerId = setInterval(function(){
			let dateX = new Date(2017, 11, 5, 18, 20, 0, 0),
				left = dateX - new Date(),
				days = Math.floor(left / 86400000),
				hours = Math.floor((left - (days * 86400000)) / 3600000 ),
				mins = Math.floor((left - (days * 86400000) - (hours * 3600000)) / 60000 );

			if (left > 60000) {
	        	console.log("You have only " + days + " days, " + hours + " hours, and " + mins + " minutes left!!!") 
	        } else {
	        	clearInterval(timerId);
	        	console.log("GO GO GO!") }
		},60000); // reminder every minute
	
};	




	