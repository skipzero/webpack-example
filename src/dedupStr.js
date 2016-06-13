function dedupStr (randomArray) {
  'use strict';
  
  randomArray.reduce(function(acc, key) {
    if (!acc[key]) {
      acc[key] = 1;
    }
    acc[key] += 1;
console.log('ACC>>>', acc)
    return acc;
  }, {})
};

module.exports = dedupStr;
