function sumRange(num) {
    if(num === 1 || num === 0) {
        return 1;
    }else 
        return num + sumRange(num - 1);
}
console.log(sumRange(6));

function power(base, exp) {
    if(exp === 0) {
        return 1;
    }else
        return base * power(base, exp - 1);
}
console.log(power(2,4));

function factorial(n) {
    if(n === 1) {
        return 1;
    }else
        return n * factorial(n - 1);
}
console.log(factorial(5));

let all = [1,2,9];