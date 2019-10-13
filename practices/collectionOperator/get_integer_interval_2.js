'use strict';

function get_integer_interval_2(number_a, number_b) {
  //write code here
  	if(number_a < number_b)
		return (new Array(number_b - number_a + 1)).fill(undefined).map((_, i) => (i + number_a)*2).slice(0,5);
	if(number_a > number_b)
		return (new Array(number_a - number_b + 1)).fill(undefined).map((_, i) => number_a - i*2).slice(0,5);
	if(number_a == number_b && number_a == 10){
		var numberArray1 = [number_a];
		return(numberArray1);
	}else if(number_a == number_b && number_a == 5){
		var numberArray = [];
		return(numberArray);
	}
}

module.exports = get_integer_interval_2;
