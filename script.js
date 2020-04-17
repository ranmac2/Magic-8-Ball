$(document).ready(function(){

    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];
	
    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#answer").hide();
        $("#answer").fadeIn(4000);

        $("#answer").text( answer );

        console.log(question);
        console.log(answer);
    };
	$("#answer").hide();
	
    var onClick = function() {
	$("#8ball").effect( "shake" );

		var question = prompt("ASK A YES/NO QUESTION!");
		
       magic8Ball.askQuestion(question);
    };
	
    $("#questionButton").click( onClick );

});