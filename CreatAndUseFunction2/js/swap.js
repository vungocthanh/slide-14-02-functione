var num_a = +prompt('Enter a number a');
var num_b = +prompt('Enter a number b');

function swapAB(num_a,num_b) {
    var temp = '',
        temp = num_a;
    num_a = num_b;
    num_b = temp;
    return "Number a = "+ num_a  +"<br>" + " Number b = " + num_b;
}
document.write(swapAB(num_a,num_b))
