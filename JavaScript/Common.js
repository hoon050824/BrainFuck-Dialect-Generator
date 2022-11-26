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

function getPair(){
    var pair = localStorage.getItem("dl");
    pair = JSON.parse(pair); console.log(pair)

    bf_di = {
        '>': pair.gt,
        '<': pair.lt,
        '+': pair.plus,
        '-': pair.minus,
        '.': pair.dot,
        ',': pair.comma,
        '[': pair.open,
        ']': pair.close
    };
    
    /* 작동하지 않는 코드
    di_bf = {
        pair.gt: '>',
        pair.lt: '<',
        pair.plus: '+',
        pair.minus: '-',
        pair.dot: '.',
        pair.comma: ',',
        pair.open: '[',
        pair.close: ']'
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
    di_bf[plus] = '+';
    di_bf[minus] = '-';
    di_bf[dot] = '.';
    di_bf[comma] = ',';
    di_bf[open] = '[';
    di_bf[close] = ']';
    */

    try{dispDialect()}catch(e){}
}

function setPair(){
    var pair = {
        gt: bf_di['>'],
        lt: bf_di['<'],
        plus: bf_di['+'],
        minus: bf_di['-'],
        dot: bf_di['.'],
        comma: bf_di[','],
        open: bf_di['['],
        close: bf_di[']'],
    }; pair = JSON.stringify(pair, null, "\t");
    localStorage.setItem("dl", pair)
}

function dispDialect(){
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
}

function di_to_bf(code){
    var s = '';

    for(var i = 0; i <= code.length; i++){
        tmp = code[i];

        for(var j = i+1; j <= code.length; j++){
            if(bf_di['>'] == tmp){
                s += '>';
                i = j-1;
                break;
            } else if(bf_di['<'] == tmp){
                s += '<';
                i = j-1;
                break;
            } else if(bf_di['+'] == tmp){
                s += '+';
                i = j-1;
                break;
            } else if(bf_di['-'] == tmp){
                s += '-';
                i = j-1;
                break;
            } else if(bf_di['.'] == tmp){
                s += '.';
                i = j-1;
                break;
            } else if(bf_di[','] == tmp){
                s += ',';
                i = j-1;
                break;
            } else if(bf_di['['] == tmp){
                s += '[';
                i = j-1;
                break;
            } else if(bf_di[']'] == tmp){
                s += ']';
                i = j-1;
                break;
            } else {
                tmp += code[j];
            }
            
            /* 작동하지 않는 코드
            if(di_bf[tmp] != undefined){
                s += di_bf[tmp];
                i = j-1;
                break;
            } else {
                tmp += code[j];
            }
            */
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