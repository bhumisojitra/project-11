document.querySelector('.p1').innerHTML = "Image";
document.querySelector('.p2').innerHTML = "Product Name";
document.querySelector('.p3').innerHTML = "Product Price";
document.querySelector('.p4').innerHTML = "Discount";
document.querySelector('.p5').innerHTML = "Total";
document.querySelector('.p6').innerHTML = "Final Amount";

let Product1 = 35000;
let Product2 = 70000;
let Discount_p1 = 10 + "%";
let Discount_p2 = 20 + "%";
let Discount1 = Product1 - (Product1 * 10) / 100;
let Discount2 = Product2 - (Product2 * 20) / 100;
let Final_amount = Discount1 + Discount2;

document.querySelector('.pn').innerHTML = "xiaomi";
document.querySelector('.pp').innerHTML = Product1;
document.querySelector('.pd').innerHTML = Discount_p1;
document.querySelector('.pt').innerHTML = Product1;
document.querySelector('.fa').innerHTML = Discount1;

document.querySelector('.pn2').innerHTML = "lenovo";
document.querySelector('.pp2').innerHTML = Product2;
document.querySelector('.pd2').innerHTML = Discount_p2;
document.querySelector('.pt2').innerHTML = Product2;
document.querySelector('.fa2').innerHTML = Discount2;

document.querySelector('.fd-name').innerHTML = "Final-Amount";
document.querySelector('.fd').innerHTML = Final_amount;