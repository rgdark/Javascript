
function flipPairs(input)
{
var arr=input.split('');
//console.log(arr);
for(i=0;i<arr.length-1;i=i+2)
{
  var temp=arr[i];
  arr[i]=arr[i+1];
  arr[i+1]=temp;
}
return  arr.join('');
}

console.log(flipPairs('check out how interesting this problem is, it\'s insanely interesting!'));
