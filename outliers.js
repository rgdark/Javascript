function detectOuterLierValue(str)
{
var arr=str.split(' ');
var evencount=0;
var oddcount=0;
var evenindex=0;
var oddindex=0;
console.log(arr);
for(i=0;i<arr.length;i++)
{
  if(arr[i]%2==0)
  {
    evencount+=1;
    evenindex=i+1;
  }
  else
  {
    oddcount+=1;
    oddindex=i+1;
  }
}
  if(evencount == 1)
  {
    return evenindex;
  }
  else
  {
    return oddindex;
  }

}
detectOuterLierValue("1 10 1 1");
