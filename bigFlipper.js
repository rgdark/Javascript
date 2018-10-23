function flipEveryNChars(input,n)
{
  newarr = [];
  arr = input.split('');
  for(i=0; i<arr.length; i=i+n) {
    newarr = newarr.concat(arr.slice(i, i+n).reverse());
  }
  return newarr.join('');
}
console.log(flipEveryNChars('a short example',5));
