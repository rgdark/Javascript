
function getAllButLastElementOfProperty(obj, key) {
  // your code here
  
var arr=obj[key];
  if(!obj[key] || arr.length==0 || !Array.isArray(obj[key]))
    {
      return [];
    }
  return arr.slice(0,arr.length-1);
  
}

