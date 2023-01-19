// var result = document.getElementById('output');
// result.innerText = "Hello World";

// // var let const - variable declaration methods (let has limited scope)
// console.log(result);

// function fun1(){
//     // window.alert("Error");
//     result.innerText = "Good Morning"
// }

// result.addEventListener("click",fun1);

var result = document.getElementById('resultbox');

var nine = document.getElementById('num9');
function func9() {
    result.innerText +=9;
}
nine.addEventListener("click",func9);

var eight = document.getElementById('num8');
function func8() {
    result.innerText +=8;
}
eight.addEventListener("click",func8);

var seven = document.getElementById('num7');
function func7() {
    result.innerText +=7;
}
seven.addEventListener("click",func7);

var six = document.getElementById('num6');
function func6() {
    result.innerText +=6;
}
six.addEventListener("click",func6);

var five = document.getElementById('num5');
function func5() {
    result.innerText +=5;
}
five.addEventListener("click",func5);

var four = document.getElementById('num4');
function func4() {
    result.innerText +=4;
}
four.addEventListener("click",func4);

var three = document.getElementById('num3');
function func3() {
    result.innerText +=3;
}
three.addEventListener("click",func3);

var two = document.getElementById('num2');
function func2() {
    result.innerText +=2;
}
two.addEventListener("click",func2);

var one = document.getElementById('num1');
function func1() {
    result.innerText +=1;
}
one.addEventListener("click",func1);

var zero = document.getElementById('num0');
function func0() {
    result.innerText +=0;
}
zero.addEventListener("click",func0);

var decimal = document.getElementById('decimal');
function funcdeci() {
    result.innerText += ".";
}
decimal.addEventListener("click",funcdeci);

var clear = document.getElementById('clear');
function funcclear() {
    result.innerText = " ";
}
clear.addEventListener("click",funcclear);

var equal = document.getElementById('equal');
function funcresult() {
    result.innerText = eval(result.innerText);
}
equal.addEventListener("click",funcresult);

var add = document.getElementById('add');
function funcadd() {
    result.innerText += "+";
}
add.addEventListener("click",funcadd);

var sub = document.getElementById('sub');
function funcsub() {
    result.innerText += "-";
}
sub.addEventListener("click",funcsub);

var multi = document.getElementById('multi');
function funcmulti() {
    result.innerText += "*";
}
multi.addEventListener("click",funcmulti);

var div = document.getElementById('div');
function funcdiv() {
    result.innerText += "/";
}
div.addEventListener("click",funcdiv);