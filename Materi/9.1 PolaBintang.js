console.log("1. PROGRAM SEGITIGA");

let t = 10;

for (let i = 1; i <= t; i++){
    let spasi = " ".repeat(t - i);
    let bintang = "*".repeat(2 * i - 1);

    console.log(spasi+bintang);
}

console.log("2. PROGRAM BELAH KETUPAT");

let n = 7;

for (let i = 1; i <= n; i++){
    let baris = " ".repeat(n - i) + "*".repeat(2*i-1);
    console.log(baris);
}

for (let i = n; i >= 1; i--){
    let baris2 = " ".repeat(n - i) + "+".repeat(2 * i - 1);
    console.log(baris2);
}

