"use strict" ;

console.log("===== IF, ELSE IF, ELSE =====");
let tahun = 2005

if (tahun == 2007){
    console.log("Ya, Lufyanto Lahir di Tahun 2007");
} else if(tahun > 2007){
    console.log("Tidak, Terlalu banyak");
} else {
    console.log("Terlalu, Tua euyyyy");
}

console.log("===== TERNARY (?) =====");

let umur = 9;

let keterangan = (umur <5) ? "Balita" : (umur < 12) ? "EsDeh" : (umur < 15) ? "EsEmpEh" : (umur < 19) ? "WOOOYYY BELAJAR UTBK WOOYYYY" : "Cari Kerja sono...."

console.log(keterangan);

let bukuygdiCari = "Mahir Tsundere";

switch (bukuygdiCari) {
    case "Novel" :
        console.log("Di Lantai 1");
        break;
    case "Mahir JavaScript" :
        console.log("Di Lantai 2");
        break;
    case "Matematika UTBK" :
        console.log("Di Lantai 3");
        break;
    case "Bertani dengan Python" :
        console.log("Di Lantai 4");
        break;
    case "Bahasa Inggris seperti Bahasa Bayi" :
        console.log("Di Lantai 5");
        break;
    case "Manga Menjadi Ichigaya Ayase" :
        console.log("Di Lantai 6");
        break;
    default :
    console.log("Buku ada di Gudang");
    break;
}


