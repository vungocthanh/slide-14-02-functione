function checkNumber(){
    var inputSome = document.getElementById('inputSomething').value;
    var result = checkAll(inputSome);
    document.getElementById('exp').innerHTML = result;
}
function checkAll(inputSome){
    if ( inputSome % 1 == 0){
        return inputSome + " Is a Number";
    }else {
        return " Is a TEXT";
    }
}