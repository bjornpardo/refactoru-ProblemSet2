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

// Write a function swapCase that takes a single string parameter 
// and swaps the case of each character. For example: if a string 
// is "Hello World" the output should be "hELLO wORLD". Let numbers 
// and symbols stay the way they are.

  	var swapCase = function(str) {

  	}

});