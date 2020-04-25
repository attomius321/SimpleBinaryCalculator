function onButton(e) {
    var btn = e.target || e.srcElement;
    var action = document.getElementById(btn.id).innerHTML;
    var res = document.getElementById('res');
    
    
    function checkOperator(){
        if(res.innerHTML.endsWith('+') || res.innerHTML.endsWith('-') || 
           res.innerHTML.endsWith('*') || res.innerHTML.endsWith('/')){
         return true;
        }
    }
    
    switch(action) {
        case '0':
        case '1':
            res.innerHTML +=action;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if(res.innerHTML.length!=0 && !checkOperator())
                res.innerHTML += action;
            break;
        case 'C':
            res.innerHTML = '';
            break;
        case '=':
            var expr = res.innerHTML;
            var nums = /(\d+)/g;
            expr = expr.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            res.innerHTML = Math.floor(eval(expr).toString(2));
            break;
        default:
            console.error('not executed');
            break;
    }
}

var buttons = document.getElementsByTagName('button');

for (let button of buttons) {
    button.onclick = onButton;
}