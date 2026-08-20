"use strict";

let camaba = {
    nama : "Lufyanto Eka Fahrezi",
    umur : 18,
    kampus : "Bina Sarana Informatika Cikarang",
    program_studi : "Teknologi Informasi",
    "cita - cita" : "Kerja dan Bisnis di BUMN"
}

console.log("----- DATA CAMABA -----");
console.log("\tNO.\t|\t\tNAMA\t\t|\t\tUMUR\t\t|\t\tPRODI\t\t");
console.log(`\t01\t|\t\t${camaba.nama}|\t\t${camaba.umur}|\t\t${camaba.program_studi}\t\t`);

//MENAMBAHKAN KEY-VALUE(PROPERTI) PADA OBJEK YG SUDAH DIBUAT
camaba.isAktif = true;
console.log(`Camaba status => ${camaba.isAktif}`)

//MENGHAPUS PROPERTI PADA OBJEK
delete camaba["cita - cita"]; // KETIKA KEY "" WAJIB DIPANGGIL DENGAN []
console.log(camaba);

// PROPERTI TERKOMPUTASI

let namaFakultas = "Teknik_dan_Informatika";

let inventarisFakultas = {
    [namaFakultas + "UBSI_Cikarang"] : "30 Komputer"
};

console.log(`Inventaris Fakultas => ${inventarisFakultas.Teknik_dan_InformatikaUBSI_Cikarang}`);

// PROPERTI SHORTHAND

function kontakDosen(nama, matkul, kampus){
    return{
        nama, matkul, kampus
    }
}

let dosen1 = kontakDosen("Yukiko Nozama", "Pemrograman dasar", "KYOTO UNIV");
let dosen2 = kontakDosen("Rikito Nakamura", "Bahasa Inggris", "KYOTO UNIV");
let dosen3 = kontakDosen("Ichigaya Arisa", "Dasar Jaringan", "KYOTO UNIV");
console.log(`Berhasil menyimpan kontak whatsapp dengan nama\n${dosen1.nama} ${dosen1.matkul} ${dosen1.kampus}`);
console.log(`Berhasil menyimpan kontak whatsapp dengan nama\n${dosen2.nama} ${dosen2.matkul} ${dosen2.kampus}`);
console.log(`Berhasil menyimpan kontak whatsapp dengan nama\n${dosen3.nama} ${dosen3.matkul} ${dosen3.kampus}`);

// PERIKSA DATA 
console.log("nama" in camaba);
console.log("cita-cita" in camaba)

for (let key in camaba){
    console.log(`key: ${key} | value: ${camaba[key]}`)
    
}
