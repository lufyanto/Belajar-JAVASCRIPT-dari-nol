// FUNCTION

function fungsi() {
    console.log('Halo Lufyanto');
}


function konversiSuhu(celcius) {
    let fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit;
}

fahrenheit = konversiSuhu(30);
console.log(`Hasil Konversi adalah ===> ${fahrenheit}`);

// FUNCTION DENGAN PARAMETER
function luassegitiga(alas, tinggi) {
    let luas = (alas * tinggi) / 2;
    return luas;


}

hasil = luassegitiga(20,30);
console.log(`Hasil Luas Segitiga ===>${hasil}`);

//FUNCTION DENGAN VALUE

function kelilingsegitiga(sisi) {
    hitung = sisi + sisi + sisi;
    return hitung;
}

hasil = kelilingsegitiga(15);
console.log(`Hasil Keliling Segitiga ===> ${hasil}`)

function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

// ARROW FUNCTION

let luaspersegi = (sisi) => {
    let luas = sisi * sisi;
    return luas;
}

let hasil2 = luaspersegi(10);
console.log('Hasilnya adalah ===>', hasil2);




function hello(name,origin= 'Bandung') {
    return `Halo! Nama saya ${name}, Saya berasal dari ${origin}`;
}

const rahmat = hello('Rahmat', 'Semarang');
const indra = hello('Indra');

console.log(rahmat);
console.log(indra);