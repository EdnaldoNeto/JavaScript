var display = document.getElementById('display')

function clean(){
    display.value = ''
}

function add(n){
    display.value += n    
}

function calcular(){
    if(display.value){
        display.value = eval(display.value)
    } else {
        display.value = 0
    }
}

function on(){
    display.focus()
}