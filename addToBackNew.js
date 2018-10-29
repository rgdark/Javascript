/*
Write a function called "addToBackNew".

Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
*/

function addToBackOfNew(arr, element) {
  // your code here
  var arr2=[];
  for (i=0;i<arr.length;i++)
    {
      arr2[i]=arr[i];
    }
  arr2.push(element);
  return arr2;
}

