// GET INPUTS

var input = document.getElementById("input");
var button = document.getElementById("button");
var insertRev = document.getElementById("insertRev");
var insertABC = document.getElementById("insertABC");
var insertPal = document.getElementById("insertPal");
var testString = "";

// EVENT LISTENERS
input.addEventListener("keyup", function(event) {
	var key = event.which || event.keyCode;
	if (key === 13) {
	validateString();
	

}
});

button.addEventListener("click", function(event){
	validateString();
});

function validateString () {
	console.log(input);	
	if (input.value.match(/^[0-9]+$/)) {
		alert("NO DIGIES DUDE!");
	} else {
	reversal();
	alphabits();
	palindrome();
	}
}

// STRING FUNCTIONS...should be one function?
function reversal(testString) {
testString = input.value;
var newString = testString.split("").reverse().join("");
insertRev.innerHTML = newString + " ~ Is the reverse of your entry";
}

function alphabits(testString) {
testString = input.value;
var newString = testString.split("").sort().join("");
insertABC.innerHTML = newString + " ~ Is the alphabetical order of your entry";
}

function palindrome(testString) {
	testString = input.value;
	if (testString === testString.split('').reverse().join('')) {
		insertPal.innerHTML = "Your string is a palindrome!";
	} else {
		insertPal.innerHTML = "Your string is not a palindrome";
	}

}

