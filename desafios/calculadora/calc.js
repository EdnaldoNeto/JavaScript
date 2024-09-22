var display = document.getElementById('display')

function clean(){
    display.value = ''
}

function add(n){
    display.value += n    
}

function calcular(){
    display.value = eval(display.value)
}