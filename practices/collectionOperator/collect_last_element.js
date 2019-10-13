'use strict';

function collect_last_element(collection) {
  //write code here
  return collection.reduce((first, last) => last);
}

module.exports = collect_last_element;
