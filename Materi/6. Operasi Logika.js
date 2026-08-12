console.log("===== Operator Logika =====");

// OR (||) mencari nilai truthy pertama
console.log("Operator OR");
let jam = 8;
if (jam < 10 || jam > 18) { 
    console.log("Toko Tutup !");
} else {
    console.log("Toko Buka !");
}

let nickName = "";
let namaAsli = "Lufy";

console.log( nickName || namaAsli || "Anonymous");
console.log("Operator AND");
// and (&&) mencari nilai Falsy Pertama
console.log( 1 && 5);
console.log( 1 && 0 && 3);
console.log(1 & "" & 1) 
console.log("Operator NOT");
// NOT (!) membalikan nilai boolean
console.log(!false);
console.log(!!"true");

console.log("\n");

console.log("===== Operator Modern =====");

console.log("Operator Kondisional Ternary (?)");

let umur = 19;
// KONDISI ? TRUE : FALSE
let pesan = (umur > 18) ? "Dewasa" : "Anak-Anak";
console.log(`Dia adalah => ${pesan}`);

let tiket = false;
let onboarding = (tiket === true) ? "Silahkan Masuk" : "Bayar dulu";
console.log(onboarding);

console.log("Nullish Coalescing (??)")

let tinggiBadan = 0;
console.log( tinggiBadan || 160 );
// OR "undefined || 160 akan ngambil true"
console.log( tinggiBadan ?? 160);
// ?? 0 || 160 akan ngambil 0

console.log("Optional Chaining (?.)")
let alamatUser = {};
console.log(alamatUser?.alamat?.jalan);

console.log("Increment dan Decrement")

let hitung = 11;
console.log(++hitung); // 1 + 11
console.log(hitung++); // 11 + 1


