function translate(){
    var s = document.getElementById("beTranslate");
    var text = bf_to_di(s.value);
    s = document.getElementById("translated");
    s.innerHTML = text;
}