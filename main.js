$(document).on('ready', function() {

	// Write a function firstReverse that takes a single string 
	// parameter and returns the string in reverse order.

	var firstReverse = function(str) {
		var array = str.split('');

		console.log(array);

		var newString= array.reverse().join('');

		return newString;
	
  		// var output =[]

  		// for (i = array.length-1; i >= 0; i--){
  		// output.push(array[i]);
  		// console.log(output);

  		// return output.join('')
  	};

  	console.log (firstReverse('hello'));

});