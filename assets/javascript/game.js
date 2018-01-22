/*global variables*/

var wins = 0;
var losses = 0;
var numberToReach = 0;
var crystalNumber = [];

var gameObject = {

	/*functions called to set the random number and random crystal numbers before game start 			 
	 */
	scoreCheck: function () {
		$("#backgroundSound")[0].play();
		numberToReach = this.randomNumber();
		crystalNumber = this.crystalRandomNumbers();
	},

	/*function called on button click, adds the crystal number to the total score if the totalscore is equal to
	 the random number win increases ,if the total score goes over the random number
	 losses increses, win/loss user gets new random number and set of crystal numbers*/
	setScore: function (elementValue, numberToReach) {

		var crystalScore = parseInt($("#crystalScore").html());
		if (crystalScore < numberToReach) {
			crystalScore = crystalScore + elementValue;
			$("#crystalScore").html(crystalScore);

		}
		if (crystalScore > numberToReach) {
			$("#crystalScore").html(0);
			losses++;
			$("#losses").html(losses);
			$("#wrongSound")[0].play();
			this.scoreCheck();
		}
		if (crystalScore === numberToReach) {
			$("#crystalScore").html(0);
			wins++;
			$("#wins").html(wins);
			$("#correctSound")[0].play();
			this.scoreCheck();
		}
	},


	/*function to pick a random number from 19 to 120*/
	randomNumber: function () {

		var randomNumber = Math.floor(Math.random() * 102) + 19;
		$("#randomNumber").html(randomNumber);
		return randomNumber;
	},

	/*function to pick a random number for the crystals from 1 to 12*/
	crystalRandomNumbers: function () {
		var crystalRandomNumbers = [];
		var j;
		for (var i = 1; i < 5; i++) {
			crystalRandomNumbers.push(Math.floor(Math.random() * 12) + 1);
		}
		return crystalRandomNumbers;
	}

};

$(document).ready(gameObject.scoreCheck());


$("#1").on("click", function () {
	gameObject.setScore(crystalNumber[0], numberToReach);
});
$("#2").on("click", function () {
	gameObject.setScore(crystalNumber[1], numberToReach);
});
$("#3").on("click", function () {
	gameObject.setScore(crystalNumber[2], numberToReach);
});
$("#4").on("click", function () {
	gameObject.setScore(crystalNumber[3], numberToReach);
});