let P = 50000;
let R = 2;
let T = 3;
let SI = (P * T * R) / 100;

document.querySelector('.p-amount').innerHTML = P;
document.querySelector('.r-interest').innerHTML = R;
document.querySelector('.n-year').innerHTML = T;
document.querySelector('.s-interest').innerHTML = SI;