let names=[];
let temp,i,j,minval;
var input=prompt("Enter name, or 0 to quit:");
while(input!="0"){
    names.push(input);
    input=prompt("Enter name, or 0 to quit:");
}
document.write('Original'+'<br/>');
for (i=0; i< names.length; i++){
if (names[i]!=null)
    document.write(names[i]+'<br/>')
}

//Sorting
document.write('<br><hr><br>');
for (i=0; i<names.length; i++){
    minval=i;
    for(j=i+1;j<names.length;j++){
        if (names[minval]>names[j]){
            minval=j;
        }
    }
    temp=names[i];
    names[i]=names[minval];
    names[minval]=temp;
}

//Display
document.write('Sorted'+'<br/>');

for (i=0; i< names.length; i++){
if (names[i]!=null)
    document.write(names[i]+'<br/>')
}