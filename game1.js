var wins=0;
var losses=0;


/*functions called to set the random number and random crystal numbers before game start 
 button click adds the crystal number to the total score if the totalscore is equal to
 the random number win increases ,if the total score goes over the random number
 losses increses, win/loss user gets new random number and set of crystal numbers
*/
function scoreCheck(){

	var numberToReach=randomNumber();	
	var crystalNumber=crystalRandomNumbers();

		document.getElementById("1").onclick=function(){
			setScore(crystalNumber[0],numberToReach);
		}
		document.getElementById("2").onclick=function(){
			setScore(crystalNumber[1],numberToReach);
		}
		document.getElementById("3").onclick=function(){
			setScore(crystalNumber[2],numberToReach);
		}
		document.getElementById("4").onclick=function(){
			setScore(crystalNumber[3],numberToReach);
		}

}

/*function to the score */
function setScore(elementValue,numberToReach){

	var crystalScore=parseInt(document.getElementById("crystalScore").innerHTML); 
	
	if(crystalScore < numberToReach)
	{
		crystalScore=crystalScore + elementValue;
		document.getElementById("crystalScore").innerHTML=crystalScore ;
	}
    if (crystalScore > numberToReach)
	{
		document.getElementById("crystalScore").innerHTML=0;
		losses++;
		console.log("inside more");
		document.getElementById("losses").innerHTML=losses ;		
		scoreCheck();
	}
	if (crystalScore===numberToReach)
	{
		document.getElementById("crystalScore").innerHTML=0;
		wins++;
		console.log("inside equal");
		document.getElementById("wins").innerHTML=wins ;		
		scoreCheck();
	}
}


/*function to pick a random number from 19 to 120*/
function randomNumber(){

	var randomNumber = Math.floor(Math.random() * 102) + 19 ;
	//var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	console.log("randomNumber" + randomNumber);
	document.getElementById("randomNumber").innerHTML =randomNumber ;
	return randomNumber;
}

/*function to pick a random number for the crystals from 1 to 12*/
function crystalRandomNumbers(){
	var crystalRandomNumbers = [];

	for (var i=0;i<4;i++)
	{
		crystalRandomNumbers.push(Math.floor(Math.random() * 12) + 1) ;
		console.log("crystalRandomNumbers  " + crystalRandomNumbers[i]);
		document.getElementById(i+1).innerHTML =crystalRandomNumbers[i] ;		

    }
	return crystalRandomNumbers;
}

document.onload = scoreCheck() ;