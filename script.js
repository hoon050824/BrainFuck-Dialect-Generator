function renewing(){
    var gt = document.getElementById('gt');
    var lt = document.getElementById('lt');
    var plus = document.getElementById('plus');
    var minus = document.getElementById('minus');
    var dot = document.getElementById('dot');
    var comma = document.getElementById('comma');
    var open = document.getElementById('open');
    var close = document.getElementById('close');

    if(
        gt.value.length >= 2 ||
        lt.value.length >= 2 ||
        plus.value.length >= 2 ||
        minus.value.length >= 2 ||
        dot.value.length >= 2 ||
        comma.value.length >= 2 ||
        open.value.length >= 2 ||
        close.value.length >= 2
    ){alert('방언으로 사용될 문자는 낱글자여야 합니다!'); return;}

    if(
        ["​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(gt.value) ||
        ["​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(lt.value) ||
        ["​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(plus.value) ||
        ["​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(minus.value) ||
        ["​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(dot.value) ||
        ["​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(comma.value) ||
        ["​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(open.value) ||
        ["​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(close.value)
    ){alert('공백문자는 방언으로 사용할 수 없습니다!'); return;}

    var check = new Set()
    check.add((gt.value.length <= 0) ? '>' : gt.value);
    check.add((lt.value.length <= 0) ? '<' : lt.value);
    check.add((plus.value.length <= 0) ? '+' : plus.value);
    check.add((minus.value.length <= 0) ? '-' : minus.value);
    check.add((dot.value.length <= 0) ? '.' : dot.value);
    check.add((comma.value.length <= 0) ? ',' : comma.value);
    check.add((open.value.length <= 0) ? '[' : open.value);
    check.add((close.value.length <= 0) ? ']' : close.value);
    if(check.size < 8){alert('중복된 문자가 존재합니다!'); return;}

    gt.placeholder = (gt.value.length <= 0) ? '>' : gt.value;
    lt.placeholder = (lt.value.length <= 0) ? '<' : lt.value;
    plus.placeholder = (plus.value.length <= 0) ? '+' : plus.value;
    minus.placeholder = (minus.value.length <= 0) ? '-' : minus.value;
    dot.placeholder = (dot.value.length <= 0) ? '.' : dot.value;
    comma.placeholder = (comma.value.length <= 0) ? ',' : comma.value;
    open.placeholder = (open.value.length <= 0) ? '[' : open.value;
    close.placeholder = (close.value.length <= 0) ? ']' : close.value;
    
    gt = (gt.value.length <= 0) ? '>' : gt.value;
    lt = (lt.value.length <= 0) ? '<' : lt.value;
    plus = (plus.value.length <= 0) ? '+' : plus.value;
    minus = (minus.value.length <= 0) ? '-' : minus.value;
    dot = (dot.value.length <= 0) ? '.' : dot.value;
    comma = (comma.value.length <= 0) ? ',' : comma.value;
    open = (open.value.length <= 0) ? '[' : open.value;
    close = (close.value.length <= 0) ? ']' : close.value;

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

    /*
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

    di_bf = {
        bf_di['>']: '>',
        bf_di['<']: '<',
        bf_di['+']: '+',
        bf_di['-']: '-',
        bf_di['.']: '.',
        bf_di[',']: ',',
        bf_di['[']: '[',
        bf_di[']']: ']'
    };

    di_bf[gt] = '>';
    di_bf[lt] = '<';
    di_bf[plus] + '+';
    di_bf[minus] = '-';
    di_bf[dot] = '.';
    di_bf[comma] = ',';
    di_bf[open] = '[';
    di_bf[close] = ']';
    */

    var print_gt = document.getElementById('print_gt');
    var print_lt = document.getElementById('print_lt');
    var print_plus = document.getElementById('print_plus');
    var print_minus = document.getElementById('print_minus');
    var print_dot = document.getElementById('print_dot');
    var print_comma = document.getElementById('print_comma');
    var print_open = document.getElementById('print_open');
    var print_close = document.getElementById('print_close');
    var ex_open = document.getElementById('ex_open');
    var ex_close = document.getElementById('ex_close');

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

    console.log(bf_to_di('><+-.,[]'));
    console.log(di_to_bf(bf_to_di('><+-.,[]')));

    var example = document.getElementById('example');
    example.innerText = bf_to_di('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++++++++++++++.------------.<<+++++++++++++++.>.+++.------.--------.>+.');
}

function compiling(){
    var code = String(document.getElementById('code').value);
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
                    console.log(s)
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

function di_to_bf(code){
    var s = '';

    for(var i of code){
        if(bf_di['>'] == i){
            s += '>';
        } else if(bf_di['<'] == i){
            s += '<';
        } else if(bf_di['+'] == i){
            s += '+';
        } else if(bf_di['-'] == i){
            s += '-';
        } else if(bf_di['.'] == i){
            s += '.';
        } else if(bf_di[','] == i){
            s += ',';
        } else if(bf_di['['] == i){
            s += '[';
        } else if(bf_di[']'] == i){
            s += ']';
        }
    }

    return s;W
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

var renewal = document.getElementById("renewal");
renewal.addEventListener('click', renewing);
var complie = document.getElementById("compile");
complie.addEventListener('click', compiling)
