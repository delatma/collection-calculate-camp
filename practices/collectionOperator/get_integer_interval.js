'use strict';

function get_integer_interval(number_a, number_b) {
  //write code here
	if(number_a < number_b)
		return (new Array(number_b - number_a + 1)).fill(undefined).map((_, i) => i + number_a);
	if(number_a > number_b)
		return (new Array(number_a - number_b + 1)).fill(undefined).map((_, i) => number_a - i);
	if(number_a == number_b)
		var numberArray = [number_a];
		return(numberArray);
}

module.exports = get_integer_interval;

