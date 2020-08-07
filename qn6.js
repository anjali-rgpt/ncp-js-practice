var principal=prompt('Enter principal:');
var rate=prompt('Enter rate:');
var time=prompt('Enter number of years:');

document.write('Parameters:\nPrincipal:'+principal+'\nRate:'+rate+'\nTime:'+time);

si=(principal*rate*time)/100;

document.write('\nSimple Interest:'+'<h5>'+si+'</h5>');