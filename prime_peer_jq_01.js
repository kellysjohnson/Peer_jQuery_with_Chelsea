
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

		age = randomNumber(1,100);
		gender = randomNumber(1,2);
		weight = randomNumber(1,250);

		var newPerson = new Person(age, gender, weight);

		$("#age").append("<tr><td id=" + i + ">" + newPerson.age + "</td></tr>");
		$("#gender").append("<tr><td id=" + i + ">" + newPerson.gender + "</td></tr>");
		$("#weight").append("<tr><td id=" + i + ">" + newPerson.weight + "</td></tr>");

		i++;

	});
});
