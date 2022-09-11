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

    di_to_bf = {
        gt: '>',
        lt: '<',
        plus: '+',
        minus: '-',
        dot: '.',
        comma: ',',
        open: '[',
        close: ']'
    };

    bf_to_di = {
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

    print_gt.innerText = bf_to_di['>'];
    print_lt.innerText = bf_to_di['<'];
    print_plus.innerText = bf_to_di['+'];
    print_minus.innerText = bf_to_di['-'];
    print_dot.innerText = bf_to_di['.'];
    print_comma.innerText = bf_to_di[','];
    print_open.innerText = bf_to_di['['];
    print_close.innerText = bf_to_di[']'];
    ex_open.innerText = bf_to_di['['];
    ex_close.innerText = bf_to_di[']'];
}

function compling(code){

}

var renewal = document.getElementById("renewal");
renewal.addEventListener('click', renewing);
var complie = document.getElementById("complie");

var di_to_bf = {};
var bf_to_di = {};