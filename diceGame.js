/*global variables to increment*/
var cCount = 0;
var gCount = 0;

function roll(){
	/*gets the input from the user*/
	var userGuessB = document.getElementById("guess");
	var userGuess = userGuessB.value;


	var output = document.getElementById("output");
	var dCount = document.getElementById("cCount");
	var guesses = document.getElementById("gCount");
	userGuess = parseInt(userGuess);

	/*correctC.innerHTML = cCount;*/
	if(
		   userGuess!= "1" 
		&& userGuess!= "2" 
		&& userGuess!= "3" 
		&& userGuess!= "4" 
		&& userGuess!= "5" 
		&& userGuess!= "6"){
		output.innerHTML = "Your guess must be 1-6, duh."
	}
	else{
		userGuess = parseInt(userGuess);
		/*get a random number 1-6*/
		var randomNumber = Math.floor(Math.random()*(1+6-1))+1;
		
		/*if correct*/
		if(userGuess == randomNumber){
			output.innerHTML = "Correct!";
			cCount++;
			dCount.innerHTML = cCount;
			
		}
		/*if incorrect*/
		else{
			output.innerHTML = "Womp. Try again."
		}

		/*increment guesses*/
		gCount++;
		guesses.innerHTML = gCount;
	}
}
