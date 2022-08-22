var n = prompt('Enter the length symbol ');
var arrSymbol = new Array(n);

for ( var i = 0 ; i < n ; i++ ){
    arrSymbol[i] = prompt("Enter a Symbol")
}
var count = 0;
function checkSymbol(arrSymbol){
    var checkItem = prompt('Enter a Symbol to Check')
    for ( var i = 0 ; i < arrSymbol.length ; i++ ){
        if( checkItem == arrSymbol[i]){
            var checked = "True";
            count++;
        }
    }
    return "The Symbol " + '"' + checkItem + '"' + " có trong mảng ="+ checked + " " + " xuất hiện " + count + " lần ";
}
document.getElementById('exp').innerHTML = arrSymbol;
alert(checkSymbol(arrSymbol));