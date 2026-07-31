const age = 10;
const name = 'Lufyanto';

console.log(`Halo nama saya ${name}, umur saya ${age}`);

// Ini adalah Komentar (Comment)

const lapangan = 190000000000; // <===== INI TIDAK BISA DIRUBAH !!


console.log(`Akan tersedia ${lapangan} lapangan padel`)

let umur = 18; // <====== INI LET BISA DITIMPA VAR NYA :)

console.log(`Tahun 2025 umur ${name} adalah ${umur} tahun`)

umur = 19

console.log(`Tahun 2026 umur ${name} adalah ${umur} tahun`)

// TIPE DATA //

// Tipe data string

const tahun = new Date().getFullYear();
const bulan = new Date().getMonth();
const hari = new Date().getDate();

console.log(`hari ini adalah tanggal ${tahun}/${bulan}/${hari}`);

// Tipe data Number

const tambah = 100 + 50;

console.log(`Hasilnya : ${tambah}`);

// Tipe data Booelan

const asal = 10 < 5 ;

console.log(asal);

// Mengubah tipe data

// String

const int = 123;
const bool = true;

const strint = String(int); // <=== U/ string non bool bisa langsung di ubah dengan String()
const strbool = Boolean.toString(bool); // <=== Khusus bool harus menggunakan Booelan.toString()

console.log(strint);
console.log(strbool);

// Number

const str = '123';
const strr = '12.2';
const bstr = true;

const strn = Number(str);
const strrn = Number(strr);
const bstrn = Number(bstr);

console.log(strn)
console.log(strrn)
console.log(bstrn)

// Memisahkan int dengan str

const contoh = '1055358pxx';
const conto = '132434.445534cpm'

const contohn = parseInt(contoh); // <=== ParseINT untuk integer
const conton = parseFloat(conto); // <=== ParseFLOAT untuk float (koma koma an)

console.log(contohn)
console.log(conton)

// Mengubah ke boolean

const apakah = 'Jokowi';
const hmmm = 0;
const kosong = NaN;

const apakahn = Boolean(apakah);
const hmmmn = Boolean(hmmm);
const kosongn = Boolean(kosong);

console.log(apakahn)
console.log(hmmmn)
console.log(kosongn)

// Secara Implisit

const impli = 577
const ngitung = impli*2;

console.log(`Hasilnya adalah ${ngitung}`)
console.log(`Hasilnya adalah ${impli*3}`)

// ARITMATIKA

// Operator Aritmatika
const angka_1 = 5;
const angka_2 = 2;

console.log(angka_1 + angka_2);
console.log(angka_1 - angka_2);
console.log(angka_1 / angka_2);
console.log(angka_1 * angka_2);
console.log(angka_1 % angka_2);
// console.log(10 ++)
// console.log(10 --)
console.log(angka_1 ** angka_2);

// Operator Perbandingan
const angka_hiji = 10;
const angka_dua = 10;

console.log(angka_hiji == angka_dua);
console.log(angka_hiji != angka_dua);
console.log(angka_hiji > angka_dua);
console.log(angka_hiji < angka_dua);
console.log(angka_hiji >= angka_dua);
console.log(angka_hiji <= angka_dua);
console.log(angka_hiji === angka_dua);
console.log(angka_hiji !== angka_dua);

// Logic Operator

const awal = true;
const akhir = false;

console.log(`Gerbang AND ${awal && akhir}`)

console.log(`Gerbang AND ${awal || akhir}`)

console.log(`Gerbang NOT : ${!awal}`)

