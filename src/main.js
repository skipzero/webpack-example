var dedupStr = require('./dedupStr.js');

function randomWord () {

  var randomArray   = [],
      randomString  = 'Maybe I didn\'t treat you quite as good as I should Maybe I didn\'t \
                       love you quite as often as I could Maybe I didn\'t hold you all those lonely, \
                       lonely times And I guess I never told you, I\'m so happy that you\'re mine';
  randomArray = randomString.split(' ')

  var randomArraydedup = dedupStr(randomArray);
  console.log('%cSo heres a string message ' + randomArraydedup, 'color: #f00; font-size: 24px; ');
  return randomArraydedup;
};

randomWord();
