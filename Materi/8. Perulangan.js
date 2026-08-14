"use strict";
console.log("1. WHILE");
let stokBuku = 10;

console.log("----- Pengecekan Stok Buku -----");

while (stokBuku > 0) {
    console.log(`Buku Berhasil di periksa: Buku ke ---> ${stokBuku}`);
    stokBuku--;
}

console.log("Akhir dari Stok");

console.log("2. DO...WHILE");

let percobaanLogin = 0;
let isLoginSuccess = false;

console.log("----- Simulasi Login -----");

do {
    percobaanLogin++;
    console.log(`Mencoba Login.... Percobaan ke -> ${percobaanLogin}`);

    if (percobaanLogin === 5) isLoginSuccess = true;
} while (!isLoginSuccess && percobaanLogin < 3);

console.log(isLoginSuccess ? "Login Berhasil" : "Akun Terkunci");


console.log("3. FOR");

console.log("\n ----- Daftar ID Mahasiswa ----- \n");

for (let x = 1; x <= 1000; x++){
    console.log(`ID MAHASISWA => 202624${x}`);
}

