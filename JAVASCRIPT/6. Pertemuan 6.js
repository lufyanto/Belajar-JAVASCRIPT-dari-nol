// CONDITIONAL STATEMENT

console.log(`${'='.repeat(10)} IF STATEMENT ${'='.repeat(10)}`)


function Nilai(nilai) {
    if (nilai >= 80) {
        console.log(`Nilai ${nilai}, IPK anda A`)
    } else if (nilai >=69) {
        console.log(`Nilai ${nilai}, IPK anda B`)
    } else if (nilai >= 50) {
        console.log(`Nilai ${nilai}, IPK anda C`)
    } else if (nilai >= 20) {
        console.log(`Nilai ${nilai}, IPK anda D`)
    } else {
        console.log(`Nilai ${nilai}, IPK anda E`)
    }
}

hasil = Nilai(78);
console.log(Nilai)

// SWITCH CASE
console.log(`${'='.repeat(10)} SWITCH CASE ${'='.repeat(10)}`)


const hari = new Date().getDay();

switch (hari) {
    case 0:
        console.log("Minggu");
        break;
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jum'at");
        break;
    case 6:
        console.log("Sabtu");
        break;
    default:
        console.log("Hari Non Valid")

}

// looping
console.log(`${'='.repeat(10)} LOOPING ${'='.repeat(10)}`)

// for (insialisasi, operator, interval)
for (let x = 1; x <= 100; x++) {
    console.log(`Ini angka ke - ${x}`)
}

// for in
const apa = {
    buah : 'Apel',
    sayur : 'Sawi',
    Angka : 300
}

for (const ini in apa) {
    console.log(`${ini} ===> Bernilai ===> ${apa[ini]}`)
}

//for of

let unggas = ['bebek','ayam','angsa','burung']
let mamalia = ['sapi','monyet','kambing','kucing']


for(let item of unggas){
    console.log(`Unggas ===> ${item}`)
}

for(item of mamalia){
    console.log(`Mamalia ===> ${item}`)
}

// while
console.log(`${'='.repeat(10)} WHILE ${'='.repeat(10)}`)

// While(Kondisi terpenuhi => Eksekusi => Tambah => Gitu terus sampai salah)

let y = 21;

while (y < 50){
    console.log(`Ini adalah angka ----> ${y}`);
    y ++;
}

// Do-While

// do {
//     Ngapain bang?
// } while(kondisi)

let i = 0;

do{
    console.log(`Ini Do While ke-${i}`);
    i++;
} while (i < 10)

