//  addNumbers

var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function closeReader () {
  reader.close();
};

function addNumbers(sum, numsLeft, completionCallback) {
  function partialSum (answer) {
    answer = parseInt(answer);

    sum += answer;

    console.log(sum);
    numsLeft-- ;
    addNumbers(sum, numsLeft, completionCallback)
  };
  if (numsLeft > 0){
    reader.question("Give me a number", partialSum);
  }

  if(numsLeft === 0){
    completionCallback(sum);
    closeReader();
  }
};

numsLeft = 4;
addNumbers(0, numsLeft, function (finalSum) {
  console.log('Thanks! My sum is:' + finalSum );
});
