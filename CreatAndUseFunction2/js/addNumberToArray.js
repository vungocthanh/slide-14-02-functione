var numLength = +prompt("enter numberLength of Array");
var arr = new Array(numLength);
for ( var i = 0 ; i < arr.length ; i++){
    arr[i] = prompt('Enter number')
}
function reverse(arr){
    return  arr.reverse();
}
document.write("Array: [" + arr + "] " + "<br>")
document.write("Reverse Array:["+ reverse(arr) +"]");


