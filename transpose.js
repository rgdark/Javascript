function transposeTwoStrings(arr)
{
  var arr1=[];
  var arr2=[];
  arr1=arr[0].split('');
  arr2=arr[1].split('');
  //console.log(arr1,arr2);
  maxLen = Math.max(arr1.length,arr2.length);
  for(i=0;i<maxLen;i++)
  {
  console.log((arr1[i] || ' ')+" "+ (arr2[i] || ' '));
  }
}
transposeTwoStrings(['Helloi','World123']);
