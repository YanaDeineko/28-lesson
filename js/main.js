/*
1.
Варианты создания функции:
    -Function Declaration (обьявление функции)

function showMessage() {
    alert('Hello');
}

     -Function Expression (функциональные выражения)
let sayGoodBye = function (){
    alert('Good Bye!');
};*/

/*2.
Не понимаю условие задания*/

/*3.*/
function getNumber(){
    let number1 = +prompt('Write a first number!');
    let number2 = +prompt('Write a second number!');
    if (number1 < number2){
        alert('-1');
    } else if ( number1 > number2){
        alert('1');
    } else if (number1 == number2){
        alert('0')
    }
}
getNumber();

/*4.*/
function factorial() {
    let inputNumber = prompt('Enter a number, please');
    let total = 1;
    for ( i = 0; i < inputNumber; i++){
        total = total * (inputNumber - i);
    }
    alert(inputNumber + '! = ' + total);
}
factorial();

/*5.*/
function calcNumber(){
    let usersNumber1 = prompt('Enter a first number, please');
    let usersNumber2 = prompt('Enter a second number, please');
    let usersNumber3 = prompt('Enter a third number, please');
    let result = (usersNumber1 + usersNumber2 + usersNumber3);
    alert(result);
}
calcNumber();

/*6.*/
function calcsquare(){
    let usersLength = +prompt('Enter the length of the rectangle');
    let usersWidth = +prompt('Enter thr width of the rectangle');
    if (usersLength > 0 && usersWidth > 0) {
        alert('The square of the rectangle is ' + usersLength * usersWidth) ;
    } else if (usersLength!='' && usersWidth==''){
        alert('The area of the square is' + usersLength * usersLength) ;
    } else if (usersLength== '' && usersWidth!=''){
        alert('The area of the square is' + usersWidth * usersWidth);
    }
}
calcsquare();

/*7.*/
function calcPerfect(){
    let n = prompt('Enter a perfect number');
    let sum = n-1;
    let  temp = n;

    for( i = 2; n > 1;){
        if(!(n%i)){
            sum -= i;
            n = n / i;
        } else i++;
    }
    if(!sum)
        alert("Number: " +temp +" is a perfect number");
    else
        alert("Number: " +temp +" is not perfect number");
}
calcPerfect();


