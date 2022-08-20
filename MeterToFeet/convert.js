function feetToMeter(foot) {
    var foot = Number(document.getElementById('number').value);
    var optionType = document.getElementById('inputFunctione').value;
    if (optionType == "feetToMeter") {
        var meterConvert = 0.305*foot;
    }
    if(meterConvert >= 0) {
        document.getElementById('exp').innerHTML = meterConvert + " Meter";
    }else{
        document.getElementById('exp').innerHTML = null;
    }
}
function meterToFeet(meter) {
    var meter = Number(document.getElementById('number').value);
    var optionType = document.getElementById('inputFunctione').value;
    if (optionType == "meterToFeet") {
        var feetConvert = 3.279 * meter;
    }
    if(feetConvert >=0) {
        document.getElementById('exp1').innerHTML = feetConvert + " Feet";
    }else {
        document.getElementById('exp1').innerHTML = null;
    }
}