function findPairForSum(arr,targetSum)
{
 for(i=0;i<arr.length-1;i++)
 {
   for(j=1; j<arr.length; j++) {
     if (arr[i] + arr[j] == targetSum) {
       return [arr[i], arr[j]];
     }

   }
 }
}//function

console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9));
