'use strict';

function get_letter_interval(number_a, number_b) {
  //write code here
  if(number_a<number_b){
	var newCollection = Array.from(Array(number_b), (x, index) => index);
	return newCollection.map(a=>(String.fromCharCode(97+a)));

  }
  if(number_a>number_b){
	var newCollection = Array.from(Array(number_a), (x, index) => index);
	return newCollection.map(a=>(String.fromCharCode(97+a))).reverse();
  }
  if(number_a==number_b){
	var newCollection = Array.from(Array(number_b), (x, index) => index);
  	return newCollection.reduce((a,b)=>[(String.fromCharCode(97+b))])

  }
}

module.exports = get_letter_interval;
