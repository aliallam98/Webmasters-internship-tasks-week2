const display = document.getElementById('monitor');
let store, pre;

function handleClick(input){
    if(input == 'br-1')
        display.value += '(';
    else if(input == 'br-2')
        display.value += ')';
    else
        display.value += input;
}

function clearAll(){
    display.value = '';
}

function clearOne(){
    display.value = display.value.toString().slice(0, -1);
}

function calculate(){
    pre = display.value;
    try{
        store = eval(display.value);
    }
    catch(err){
        store = 'error';
    }
}

function squareRootFn(){
    calculate();
    store = parseInt(store);
    store = Math.sqrt(store);
    display.value = store;
}

function squareFn(){
    calculate();
    store = parseInt(store);
    store = store * store;
    display.value = store;
}

function preview(){
    display.value = pre;
}

function calculateFn(){
    calculate();
    display.value = store;
}