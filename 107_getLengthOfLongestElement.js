function getLengthOfLongestElement(arr) {
  // your code here
  var maxlen=0;
for(i=0;i<arr.length;i++)
  {
    if(arr[i].length>maxlen){
      maxlen=arr[i].length;
    } 
  }
  return maxlen;
}
