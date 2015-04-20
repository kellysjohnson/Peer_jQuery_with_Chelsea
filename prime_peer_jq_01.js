//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var i = 1;
// var age;
// var gender;
// var weight;

function Person(age, gender,weight){
	this.age=age;
	this.gender=gender; //does this need to be a function with a conditional?
	this.weight=weight;
}


$(document).ready(function() {
	$('button').on("click", function(){
		var age = randomNumber(1,100);//this was saying age = undefined??
		var gender = randomNumber(1,2);
		var weight = randomNumber(1,250);

		var newPerson = Person(age,gender,weight);


		/*function addPerson(age, gender, weight){
			this.age = randomNumber(1,100);
			this.gender = randomNumber(1,2);
			if (this.gender == 1){
				this.gender = "Male";
			} else {
				this.gender = "Female";
			}
			this.weight = randomNumber(1,250);
		} */
		i++;
		person(100, 1, 200);
		console.log(person);
		console.log(newPerson);
		$("#personList").append("<p>Person" + i + "is " + newPerson.age + " years old, is a " + newPerson.gender + " and weighs " + newPerson.weight + "</p>");
	});
});