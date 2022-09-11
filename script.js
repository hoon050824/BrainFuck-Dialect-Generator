function renewing(){
    gt = document.getElementById('gt');
    lt = document.getElementById('lt');
    plus = document.getElementById('plus');
    minus = document.getElementById('minus');
    dot = document.getElementById('dot');
    comma = document.getElementById('comma');
    open = document.getElementById('open');
    close = document.getElementById('close');

    gt.placeholder = gt.value;
    lt.placeholder = lt.value;
    plus.placeholder = plus.value;
    minus.placeholder = minus.value;
    dot.placeholder = dot.value;
    comma.placeholder = comma.value;
    open.placeholder = open.value;
    close.placeholder = close.value;
    
    gt = gt.value;
    lt = lt.value;
    plus = plus.value;
    minus = minus.value;
    dot = dot.value;
    comma = comma.value;
    open = open.value;
    close = close.value;

    di_bf = {
        gt: '>',
        lt: '<',
        plus: '+',
        minus: '-',
        dot: '.',
        comma: ',',
        open: '[',
        close: ']'
    };

    bf_di = {
        '>': gt,
        '<': lt,
        '+': plus,
        '-': minus,
        '.': dot,
        ',': comma,
        '[': open,
        ']': close
    };

    print_gt = document.getElementById('print_gt');
    print_lt = document.getElementById('print_lt');
    print_plus = document.getElementById('print_plus');
    print_minus = document.getElementById('print_minus');
    print_dot = document.getElementById('print_dot');
    print_comma = document.getElementById('print_comma');
    print_open = document.getElementById('print_open');
    print_close = document.getElementById('print_close');
    ex_open = document.getElementById('ex_open');
    ex_clost = document.getElementById('ex_close');

    print_gt.innerText = bf_di['>'];
    print_lt.innerText = bf_di['<'];
    print_plus.innerText = bf_di['+'];
    print_minus.innerText = bf_di['-'];
    print_dot.innerText = bf_di['.'];
    print_comma.innerText = bf_di[','];
    print_open.innerText = bf_di['['];
    print_close.innerText = bf_di[']'];
    ex_open.innerText = bf_di[']'];
    ex_close.innerText = bf_di['['];

    example = document.getElementById('example');
    console.log(bf_to_di('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++++++++++++++.------------.<<+++++++++++++++.>.+++.------.--------.>+.'));
    example.innerText = bf_to_di('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++++++++++++++.------------.<<+++++++++++++++.>.+++.------.--------.>+.');
}

function compiling(){
    code = String(document.getElementById('code').value);
    code = di_to_bf(code); //console.log(code);
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
    console.log(s);
    output = document.getElementById('output');
    output.innerText = s;
}

function di_to_bf(code){
    var s = '';

    for(var i of code){
        if(di_bf[i] != undefined){
            s += di_bf[i];
        }
    }

    return s;
}

function bf_to_di(code){
    var s = '';

    for(var i of code){
        if(bf_di[i] != undefined){
            s += bf_di[i];
        }
    }

    return s;
}

var di_bf = {
    '>': '>',
    '<': '<',
    '+': '+',
    '-': '-',
    '.': '.',
    ',': ',',
    '[': '[',
    ']': ']'
};

var bf_di = {
    '>': '>',
    '<': '<',
    '+': '+',
    '-': '-',
    '.': '.',
    ',': ',',
    '[': '[',
    ']': ']'
};

var renewal = document.getElementById("renewal");
renewal.addEventListener('click', renewing);
var complie = document.getElementById("compile");
complie.addEventListener('click', compiling)
