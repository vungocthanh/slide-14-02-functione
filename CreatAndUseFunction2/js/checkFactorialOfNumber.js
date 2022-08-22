function calculateFactorial(){
    var number = document.getElementById('inputNumber').value;
    var result = factorialOfNumber(number);
    document.getElementById('exp').innerHTML = "Factorial of " + number +" " + "is  " + result;
}

function factorialOfNumber(number){
    for ( var i = 1, a = 1 ; i <= number ; i++){
        var a = a * i;
    }
    return a;
}