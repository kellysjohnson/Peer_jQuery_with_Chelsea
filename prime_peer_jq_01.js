//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var i = 0;
var age;
var gender;
var weight;

function Person(age, gender, weight){
	this.age = age;
	this.gender = gender;
	if (this.gender == 1){
		this.gender = "Male";
	} else {
		this.gender = "Female";
	}
	this.weight = weight;
}


$(document).ready(function() {
	$('button').on("click", function(){
		age = randomNumber(1,100);//this was saying age = undefined??
		gender = randomNumber(1,2);
		weight = randomNumber(1,250);
		var newPerson = new Person(age, gender, weight);
		i++;
		$("#personList").prepend("<p>Person " + i + " is " + newPerson.age + " years old, is a " + newPerson.gender + " and weighs " + newPerson.weight + " pounds.</p>");
	});
});