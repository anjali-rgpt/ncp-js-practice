var n=prompt('Enter number of Fibonacci terms:')

var a=0;
var b=1;

var count=0;
document.write(a+" ");
document.write(b+" ");
while (count<(n-2)) {
   var c=a+b;
   a=b;
   b=c;
   document.write(c+" ");
   count++;
    
}
