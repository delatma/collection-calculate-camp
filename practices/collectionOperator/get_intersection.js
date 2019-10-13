'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  collection_c = collection_b.filter((value) => collection_a.includes(value));
  return collection_c;
}

module.exports = get_intersection;
