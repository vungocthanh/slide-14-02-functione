var numLength = +prompt("enter numberLength of Array");
var arr = new Array(numLength);
for ( var i = 0 ; i < arr.length ; i++){
    arr[i] = prompt('Enter number')
}
var firstNumber;
var lastNumber;
var temp = '';
var j = arr.length -1;
function reverse(arr){
    for ( i = 0 ; i < arr.length ; i++){

        var j = arr.length -1;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return arr;
}
document.write("Array: [" + arr + "] " + "<br>")
document.write("Reverse Array:["+ reverse(arr) +"]");


