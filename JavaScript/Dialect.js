function loadDialect(){
    var import_file = document.getElementById('import');
    var content = new FileReader();
    content.readAsText(import_file.files[0]);
    
    content.onload = (e) => {
        content = content.result;
        console.log(import_file.files[0]); console.log(content);

        if(
            import_file.files[0].type != "application/json" ||
            !JSON.parse(content).isDialect
        ){document.getElementById('reset').innerHTML = '<input onChange="loadDialect()" id="import" type="file" accept=".json">'; alert('올바른 파일이 아닙니다!');  return}

        import_file = JSON.parse(content);

        var gt = document.getElementById('gt');
        var lt = document.getElementById('lt');
        var plus = document.getElementById('plus');
        var minus = document.getElementById('minus');
        var dot = document.getElementById('dot');
        var comma = document.getElementById('comma');
        var open = document.getElementById('open');
        var close = document.getElementById('close');

        gt.value = import_file.gt;
        lt.value = import_file.lt;
        plus.value = import_file.plus;
        minus.value = import_file.minus;
        dot.value = import_file.dot;
        comma.value = import_file.comma;
        open.value = import_file.open;
        close.value = import_file.close;
    }
}

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
        [" ", "​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(gt.value) ||
        [" ", "​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(lt.value) ||
        [" ", "​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(plus.value) ||
        [" ", "​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(minus.value) ||
        [" ", "​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(dot.value) ||
        [" ", "​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(comma.value) ||
        [" ", "​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(open.value) ||
        [" ", "​", " ", " ", " ", " ", " ", " ", " ", " ", " ", "⠀"].includes(close.value)
    ){alert('공백문자는 방언으로 사용할 수 없습니다!'); return;}

    for(var i of [gt, lt, plus, minus, dot, comma, open, close]){
        for(var j of [gt, lt, plus, minus, dot, comma, open, close]){
            if(
                (i != j && j.value.length > 0 && i.value.includes(j.value)) ||
                (i.value.length <= 0 && j.value.length > 0 && i.title.includes(j.value))
            ){alert('중복된 문자가 존재합니다!'); return;}
        }
    }

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
    di_bf[plus] = '+';
    di_bf[minus] = '-';
    di_bf[dot] = '.';
    di_bf[comma] = ',';
    di_bf[open] = '[';
    di_bf[close] = ']';
    */

    setPair();
    dispDialect();
}