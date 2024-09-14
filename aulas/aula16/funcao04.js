//Fatorial - 5! = 5 x 4 x 3 x 2 x 1;

function fatorial(n){
    let fat = 1
    for(let v = n; v > 1; v--){
        fat *= v
    }
    return fat
}
console.log(fatorial(5))