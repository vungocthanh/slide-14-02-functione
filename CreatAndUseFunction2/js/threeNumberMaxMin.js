var num_a = +prompt('Enter number a');
var num_b = +prompt('Enter number b');
var num_c = +prompt('Enter number c');
function checkMinMax(num_a,num_b,num_c){
    var min = num_a;
    if ( min < num_b) {
        min = num_b;
    }
    if ( num_a < num_c){
        min = num_c;
    }
    result = '';
    result = min;
    return result;
}
alert(checkMinMax(num_a,num_b,num_c))