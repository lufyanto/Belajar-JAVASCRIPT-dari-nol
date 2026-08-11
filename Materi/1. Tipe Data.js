"use Strict" ;

// 1. NUMBER (Angka)
// Mencakup Bilangan bulat, Pecahan, dan Nilai Spesial

let saldo = 5_590_000;
let bunga = 0.05;

let tidakTerhingga = 10/0; // <=== Infinity
let galatMatematika = "Bukan Angka" / 2; // <=== NaN

console.log("===== TIPE NUMBER =====\n");
console.log(`Variabel berisi ${saldo} dan tipe datanya :`);
console.log(typeof saldo);
console.log(`Variabel berisi ${bunga} dan tipe datanya :`);
console.log(typeof bunga);
console.log(`Variabel berisi ${tidakTerhingga} dan tipe datanya :`);
console.log(typeof tidakTerhingga);
console.log(`Variabel berisi ${galatMatematika} dan tipe datanya :`);
console.log(typeof galatMatematika);

/* 2. BIGINT (BIG INTEGER)
Digunakan Untuk angka bulat yang sangat besar
Diakhir wajib pake 8787878"n" */

const idMahasiswaLufyanto = 2026060743912007181277890n;

console.log("\n===== TIPE BIG INT =====\n");
console.log(`ID MAHASISWA = ${idMahasiswaLufyanto}`);
console.log(`Tipenya adalah =====> ${typeof idMahasiswaLufyanto}`);


// 3. STRING
// Bisa menggunakan petik tunggal '', ganda "", backtick``.

let namaMahasiswa = "Lufyanto";
let prodiMahasiswa = "Teknologi Informasi";
let sapaMahasiswa = `Hai Perkenalkan nama saya ${namaMahasiswa}, saya dari prodi ${prodiMahasiswa}`;

console.log("\n===== TIPE STRING =====\n");
console.log(sapaMahasiswa);
console.log(`Tipe datanya ====> ${typeof sapaMahasiswa}`);

// 4. BOOLEAN
// Hanya memiliki 2 ouput (True/False)

let sudahBayarIPI = true;
let isLunasIPI = 1 > 3;

console.log("\n===== TIPE BOOLEAN =====\n");
console.log(`Apakah Joni sudah bayar IPI ? ==> ${sudahBayarIPI}`);
console.log(`Apakah sudah Lunas ? ===> ${isLunasIPI}`);
console.log(`Tipe Datanya =====> ${typeof isLunasIPI}`);

// 5. NULL
// Isiny Kosong

let alamatKampus = null;

if (alamatKampus == null){
    console.log(`\nAlamat Kampus Belum ada, Isi dulu...`);
};

console.log("\n===== TIPE NULL =====\n");
console.log(`Tipe datanya =====> ${alamatKampus}`);

// 6. UNDEFINED
// Variabel belum diisi

let statusPekerjaan;

if (statusPekerjaan == undefined){
    console.log("\nKamu Masih Nganggur, CARI KERJA SONO!!");
}

console.log("\n===== TIPE UNDEFINED =====\n");
console.log(`Tipe datanya =====> ${statusPekerjaan}`);

// 7. SYMBOL
// Menggunakan Identifier

const idMaba = Symbol("PKKMB_UBSI_2026");

console.log("\n===== TIPE SYMBOL =====\n");
console.log(`Tipe datanya =====> ${typeof idMaba}`);

// 8. OBJECT
// TIPE DATA NONPRIMITIF UNTUK OBJEK YG KOMPLEKS

const kebutuhanBelanja = {
    //Key : //value,
    item: "Apple",
    Jumlah: 5,
    harga: 12000
}

const Kalimat = `\nSaya membeli ${kebutuhanBelanja.item}, berjumlah ${kebutuhanBelanja.Jumlah}, dengan harga ${kebutuhanBelanja.harga}`;
console.log(Kalimat);
console.log("\n===== TIPE OBJECT =====\n");
console.log(`Tipe datanya =====> ${typeof kebutuhanBelanja}`);


