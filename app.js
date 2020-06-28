function getNumber(num){
    var jsresult = document.getElementById("jsresult");
    jsresult.value += num;
}

function clearResult(){
    var jsresult = document.getElementById("jsresult");
    jsresult.value = ""
}

function getResult(){
    var jsresult = document.getElementById("jsresult");
    jsresult.value = eval(jsresult.value)
}