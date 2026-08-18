console.log("=".repeat(10),"PERSEGI","=".repeat(10),"\n");

let persegi = 10;

for( let i = 0; i < persegi ; i++){
    let baris = "";
    
    for ( let j = 0; j < persegi ; j++){
        baris += "* ";
    }
    console.log(baris);
}

console.log("\n","=".repeat(10),"SEGITIGA SIKU SIKU","=".repeat(10),"\n");

let segitiga = 6;

for (let a = 1 ; a <= segitiga ; a++){
    baris = "";
    for (let b = 1; b <= a; b++){
        baris += "*";
    }
    console.log(baris);
}

console.log("\n","=".repeat(10),"SEGITIGA","=".repeat(10),"\n");

let segitigaa = 5;

for (let x = 1; x <= segitigaa; x++){
    spasi = " ".repeat(segitiga - x);
    bintang = "*".repeat(x * 2 - 1);

    console.log(spasi+bintang);
}

console.log("\n","=".repeat(10),"SEGITIGA TERBALIK","=".repeat(10),"\n");

let terbalik = 5;

for (let l = terbalik ; l >= 1; l--){
    spasil = " ".repeat(terbalik - l);
    bintangl = "*".repeat(l * 2 - 1);

    console.log(spasil+bintangl);
}


console.log("\n","=".repeat(10),"BELAH KETUPAT","=".repeat(10),"\n");

let segitigaaa = 5;

for (let x = 1; x <= segitigaaa; x++){
    spasi = " ".repeat(segitigaaa - x);
    bintang = "*".repeat(x * 2 - 1);

    console.log(spasi+bintang);
}

let terbaliik = 5;

for (let l = terbaliik ; l >= 1; l--){
    spasil = " ".repeat(terbaliik - l);
    bintangl = "*".repeat(l * 2 - 1);

    console.log(spasil+bintangl);
}