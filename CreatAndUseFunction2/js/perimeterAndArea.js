function calculate(){
    var number = document.getElementById('inputNumber').value;
    var cacuOptione = document.getElementById('calculateOption').value;

    var result = calculatePerimeter(number,cacuOptione);
    document.getElementById('exp').innerHTML = result;
}
function calculatePerimeter(number,cacuOptione){
    if ( cacuOptione == "perimeter") {
        return number * 2 * 3.14;


    } else  if ( cacuOptione == "area"){
        return number * number * 3.14;
    }
}
