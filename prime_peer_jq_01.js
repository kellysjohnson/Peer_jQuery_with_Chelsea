
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var i = 0;
var age;
var gender;
var weight;
var name;

maleArray = ["Steve", "Joe", "Bill", "William", "Fred", "Kodi", "Harold", "Jack"];
femaleArray = ["Samantha", "Wilhemina", "Mulan", "Jessica", "Susan", "Brenda", "Julie", "Alice"];


function Person(age, gender, weight, name){
	this.age = age;
	this.gender = gender;
	if (this.gender == 1){
		this.gender = "Male";
	} else {
		this.gender = "Female";
	}
	if (this.gender == "Male"){
		this.name = maleArray[name];
	} else {
		this.name = femaleArray[name];
	}

	this.weight = weight;

}



$(document).ready(function() {
	$('button').on("click", function(){
		name = (randomNumber(1, maleArray.length) - 1);     //The flaw with array.length is that it ASSUMES the maleArray and femaleArray are the same length.
		age = randomNumber(1,100);
		gender = randomNumber(1,2);
		weight = randomNumber(1,250);

		var newPerson = new Person(age, gender, weight, name);

		$("#age").append("<tr><td>" + newPerson.age + "</td></tr>");
		$("#gender").append("<tr><td>" + newPerson.gender + "</td></tr>");
		$("#weight").append("<tr><td>" + newPerson.weight + "</td></tr>");
		$("#name").append("<tr><td>" + newPerson.name + "</td></tr>");

		i++;

	});
});
