/*
Computer science and software engineering have lots of cool, useful ideas for you to absorb and apply in your upcoming career.

One of the Big Ideas is called "divide and conquer". It's the simple-seeming notion that it's useful to break down a big problem into a bunch of smaller, more-tractable versions of that problem.  

One cool, easy way to apply Divide & Conquer is in finding things!  

Give yourself 30 minutes (since this is a new technique to absorb).  

Timer ready?  De-obfuscate...  Go, go, go! :)

Starter Code :
/*
De-obfuscate via rot13 as usual.

Ovanel frnepu vf n grpuavdhr sbe irel encvqyl frnepuvat n fbegrq pbyyrpgvba ol phggvat gur frnepu fcnpr va unys ng rirel cnff.

Tvira n fbegrq neenl, fhpu nf guvf:
[1, 3, 16, 22, 31, 33, 34]

Lbh pna frnepu sbe gur inyhr 31, nf sbyybjf:

1) Cvpx gur zvqcbvag: 22.
2) Gur inyhr vf uvture guna 22, fb abj pbafvqre bayl gur evtug unys bs gur cerivbhf neenl:
[...31, 33, 34]
3) Cvpx gur zvqcbvag: 33
4) Gur inyhr vf ybjre guna 33, fb abj pbafvqre bayl gur yrsg unys bs gur cerivbhf neenl:
[...31...]
5) Cvpx gur zvqcbvag: 31
6) Lbh'ir uvg gur inyhr.
7) Erghea gur vaqrk bs gur inyhr.

Abgrf:
* Vs lbh qba'g svaq gur inyhr, lbh pna erghea ahyy.
* Vs ng nal cbvag lbh pnyphyngr gur vaqrk bs gur zvqcbvag naq trg n senpgvbany ahzore, whfg ebhaq vg qbja ("sybbe" vg).

*/

/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it)
.
*/
function binary(arr, start, end, value)
{
  median=Math.floor((end-start)/2); // 3
  midpoint=arr[start+median]; // 33

  if(midpoint>value)
  {
    return binary(arr, 0, median, value);
  }
  else if(midpoint<value)
  {
    return binary(arr, median+1, arr.length-1, value);
  }
  else 
  {
    return start+median;
  }
}
arr= [1, 3, 16, 22, 31, 33, 34]
binary(arr, 0, arr.length-1, 31);
