function BF2DI(){
    var s = document.getElementById("beTranslate");
    var text = bf_to_di(s.value);
    s = document.getElementById("translated");
    s.innerHTML = text;
}

function DI2BF(){
    var s = document.getElementById("beTranslate");
    var text = di_to_bf(s.value);
    s = document.getElementById("translated");
    s.innerHTML = text;
}