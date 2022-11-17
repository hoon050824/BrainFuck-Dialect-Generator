function isContainComma(){
    var code = String(document.getElementById('code').value);
    code = di_to_bf(code);

    if(code.includes(',')){
        var button = document.getElementById('showButton');
        button.innerHTML = '<button onClick=\'compiling()\'>실행</button>'
    } else{
        var button = document.getElementById('showButton');
        button.innerHTML = ''
        compiling();
    }

}

function compiling(){
    var code = String(document.getElementById('code').value);
    code = di_to_bf(code); console.log(code);
    var pointer = 0;
    var cursor = 0;
    var memory = [];
    var loopstack = [];
    var s = ''

    var instruction = code[cursor];

    while(cursor < code.length){
        //console.log(instruction);

        switch(instruction){
            case '>': pointer++;
                    break;
            case '<': pointer--;
                    break;
            case '+': memory[pointer] = (memory[pointer] != undefined) ? (memory[pointer] + 1) : 1;
                    break;
            case '-': memory[pointer] = (memory[pointer] != undefined) ? (memory[pointer] - 1) : -1;
                    break;
            case '.': s += String.fromCharCode(memory[pointer]);
                    break;
            case ',': memory[pointer] = parseInt(prompt('입력'));
                    break;
            case '[': 
                    var bracket = 1;

                    if(memory[pointer]){
                        loopstack.push(cursor)
                    } else{
                        while(bracket && code[++cursor]){
                            if(code[cursor] == ']'){
                                bracket--;
                            } else if(code[cursor] == '['){
                                bracket++;
                            }
                        }
                    } break;
            case ']': cursor = loopstack.pop() - 1;
                    break
        }

        instruction = code[++cursor];
    }

    console.log(memory);
    console.log(decodeURIComponent(escape(s)));

    var output = document.getElementById('output');
    output.innerText = decodeURIComponent(escape(s));
}