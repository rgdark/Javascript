function isRotated(string1,string2)
{
arr=string1.split('');
console.log(arr);
for(i=0;i<arr.length;i++)
 {
arr.unshift(arr.pop());
console.log(arr);
 if(arr.join('')==string2)
  {
    return true;
  }//if
 }//for
 return false;
}//function
console.log(isRotated('hello world','orldhello x'));
