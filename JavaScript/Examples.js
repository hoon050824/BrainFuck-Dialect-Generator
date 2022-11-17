function dialectExample(name){
    var example = document.getElementById(name);
    var code = example.innerHTML.replaceAll('&gt;', '>').replaceAll('&lt;', '<');
    console.log(code);

    localStorage.setItem('ExampleName', name);
    localStorage.setItem('ExampleCode', bf_to_di(code));
    var tab = window.open('Plain.html', "", "width=320, height=600");
}