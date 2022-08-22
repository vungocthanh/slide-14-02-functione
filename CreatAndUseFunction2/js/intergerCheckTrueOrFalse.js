var number = +prompt('Enter a number check Interger');
alert(checkNumberIntergerTrueOrFalse(number));
function checkNumberIntergerTrueOrFalse(number){
    if(number > 0){
        var checked = 'true';

    }else{
        var checked ='false';
    }
    return checked;
}
