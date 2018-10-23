function getSmallestElementAtProperty(obj, key) {
  // your code here
  var arr=obj[key];
  if(!Array.isArray(obj[key]) || arr.length==0 || !obj[key])
    {
      return undefined; 
    }
  
  var minval=arr[0];
  for(i=0;i<arr.length;i++)
    {
      if(arr[i]<minval)
      {
        minval=arr[i];
      }
    }
  return minval;
}

