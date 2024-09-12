var a = 10;
document.getElementById('q71').textContent = "the value of a is: "+a;
document.getElementById('q72').textContent = "the value of ++a is: "+ ++a;
document.getElementById('q73').textContent = "the value of a is: "+a;
document.getElementById('q74').textContent = "the value of a++ is: "+ a++;
document.getElementById('q75').textContent = "the value of a is: "+a;
document.getElementById('q76').textContent = "the value of --a is: "+ --a;
document.getElementById('q77').textContent = "the value of a is: "+a;
document.getElementById('q78').textContent = "the value of a-- is: "+ a--;
document.getElementById('q79').textContent = "the value of a is: "+a;

var A=2, B=1;

document.getElementById('r1').textContent = "a: "+A;
document.getElementById('r2').textContent = "b: "+B;

document.getElementById('r3').textContent = "--a: "+ --A;
var c = A - --B;
document.getElementById('r4').textContent = "--a - --b: "+ c;
var d = c + ++B;
document.getElementById('r5').textContent = "--a - --b + ++b: "+ d;
var e = d + B--;
document.getElementById('r6').textContent = "--a - --b + ++b + b--: "+e;
var result = e;
document.getElementById('r7').textContent = "result: "+result;

