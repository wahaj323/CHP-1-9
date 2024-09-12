var num1 = 12;
var num2 = 5;

var sum = num1 + num2;
var dif = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

document.getElementById('result1').textContent = 'the sum of '+num1+' and '+num2+' is '+sum+'.';
document.getElementById('result2').textContent = 'the difference of '+num1+' and '+num2+' is '+dif+'.';
document.getElementById('result3').textContent = 'the multiplication of '+num1+' and '+num2+' is '+mul+'.';
document.getElementById('result4').textContent = 'the divison of '+num1+' and '+num2+' is '+div+'.';
document.getElementById('result5').textContent = 'the modulus of '+num1+' and '+num2+' is '+mod+'.';

var b1;
document.getElementById('a1').textContent = 'Value after variable declaration is: '+b1;
b1 = 5;
document.getElementById('a2').textContent = 'Initial Value: '+b1;
b1++;
document.getElementById('a3').textContent = 'Value after increment is: '+b1;
b1+=7;
document.getElementById('a4').textContent = 'Value after addition is: '+b1;
b1--;
document.getElementById('a5').textContent = 'Value after decrement is: '+b1;
b1%=3;
document.getElementById('a6').textContent = 'The remainder is: '+b1;

var price = 600;
var ticket = 5;
var totalPrice = price * ticket;

document.getElementById('movie').textContent = 'Total cost to buy '+ticket+' tickets to a movie is '+totalPrice+"PKR";

var tblnum = 4;
document.getElementById('t1').textContent = tblnum+' * '+1+' = '+tblnum*1;
document.getElementById('t2').textContent = tblnum+' * '+2+' = '+tblnum*2;
document.getElementById('t3').textContent = tblnum+' * '+3+' = '+tblnum*3;
document.getElementById('t4').textContent = tblnum+' * '+4+' = '+tblnum*4;
document.getElementById('t5').textContent = tblnum+' * '+5+' = '+tblnum*5;
document.getElementById('t6').textContent = tblnum+' * '+6+' = '+tblnum*6;
document.getElementById('t7').textContent = tblnum+' * '+7+' = '+tblnum*7;
document.getElementById('t8').textContent = tblnum+' * '+8+' = '+tblnum*8;
document.getElementById('t9').textContent = tblnum+' * '+9+' = '+tblnum*9;
document.getElementById('t10').textContent = tblnum+' * '+10+' = '+tblnum*10;

var celcius = 25;
var fahrenheit = 70;

var FTC = (fahrenheit-32)*(5/9);
var CTF = (celcius*(9/5))+32;

document.getElementById('ct').textContent = celcius+'C is '+CTF+'F';
document.getElementById('ft').textContent = fahrenheit+'F is '+FTC+'C';

