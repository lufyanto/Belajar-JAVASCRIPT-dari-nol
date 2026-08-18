let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "*";
    let space = ' ';
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
}
for (let i = n - 1; i >= 1; i--) {
    let str = "*";
    let space = ' ';
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
}

let a = 10;
for (let x = 1; x <= n ; x++){
    let bintang ="*";
    let spasi = " ";
    console.log(spasi.repeat(n-x) + bintang.repeat(x * 2 -1));
}

console.log("1. POLA SEGITIGA SIKU-SIKU");

let tinggi = 5;

for(let i = 1; i <= tinggi; i++ ){
    let baris = "";
    for (let j = 1; j <= i; j++){
        baris += "*";
    }
    console.log(baris);
}

console.log("2. POLA PERSEGI BINTANG");

let ukuran = 5;

for (let i = 0; i < ukuran; i++){
    let baris = "";
    for (let j = 0; j < ukuran; j++){
        baris += "*  ";
    }
    console.log(baris);
}

console.log("3. POLA REPEAT")

let n = 10;

for (let i = 1; i <= n; i++){
    console.log("*".repeat(i));
}
