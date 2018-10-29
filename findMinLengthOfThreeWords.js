/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var minlength=0;
if(word1.length<word2.length)
  {
    minlength=word1.length;
  }
  else
    {
      minlength=word2.length;
    }
  
  if(word3.length<minlength)
    {
      minlength=word3.length;
    }
  return minlength;
  
}

