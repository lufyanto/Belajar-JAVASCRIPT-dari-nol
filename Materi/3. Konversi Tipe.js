"use strict" ;

let statusLogin = true;
console.log(typeof statusLogin);

console.log('Kita KONVERSIKAN ke STRING ==>');

statusLogin = String(statusLogin);
console.log(typeof statusLogin);
console.log(statusLogin);

let skor = null;
console.log(String(null)); // <== String(Value);


let hargaBarang = "100000";
let Pajak = "10";

console.log(hargaBarang+Pajak);
// ini salah karena str + str

let hargaAkhir = +hargaBarang + +Pajak;
console.log(hargaAkhir);
// ini benar karena sebelum operan ada + nya

console.log("Contoh Konversi Unik");
console.log(Number("12345"));
console.log(Number("1234r"/*Error jadi NaN ada chr alfabet */));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

console.log("Tipe Data Boolean");

console.log("True")
console.log("===============")
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean(19000000));
console.log(Boolean("Lufyanto"))
console.log("False");
console.log("===============")
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));

