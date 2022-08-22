var n = prompt('Enter the length symbol ');
var arrSymbol = new Array(n);

for ( var i = 0 ; i < n ; i++ ){
    arrSymbol[i] = prompt("Enter a Symbol")
}
function checkSymbol(arrSymbol){
    var checkItem = prompt('Enter a Symbol to Check')
    for ( var i = 0 ,count = 0 ; i < arrSymbol.length ; i++ ){
        if( checkItem == arrSymbol[i]){
            var checked = "True";
            var count++;
        }
    }
    return "The Symbol" + checked + " " + " so lan xuat hien" + count;
}
alert(checkSymbol(arrSymbol));