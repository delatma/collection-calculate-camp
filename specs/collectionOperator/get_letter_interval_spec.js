'use strict';

var get_letter_interval = require('../../practices/collectionOperator/get_letter_interval.js');

describe('get_letter_interval', function () {

  var collection_a = ['a', 'b', 'c', 'd', 'e'];
  var collection_b = ['e', 'd', 'c', 'b', 'a'];

  it('Should return the corresponding letter interval.', function() {

    var result = get_letter_interval(1, 5);
    expect(result).toEqual(collection_a);
  });

  it('Should return the corresponding letter range.', function() {

    var result = get_letter_interval(5, 1);
    expect(result).toEqual(collection_b);
  });

  it('Should return only the letters corresponding to the interval', function() {

    var result = get_letter_interval(5, 5);
    expect(result).toEqual(['e']);
  });
});
