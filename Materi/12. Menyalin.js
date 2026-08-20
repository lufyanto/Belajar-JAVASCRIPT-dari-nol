
console.log("=== 1. REFERENSI - NIILAI PRIMITIF ===");

let pesan = "Assalamu'alaikum";
let frase = pesan;

frase = "Hallo!";

console.log(`pesan: ${ pesan }`);
console.log(`frase: ${ frase }`);

//tipe objektif
let user = { name: "Lufy" };
let admin = user;

console.log(`nama => ${ user.name }`);
console.log(`admin => ${ admin.name }`);

admin.name = "Joko";

console.log(`nama => ${ user.name }`);
console.log(`admin => ${ admin.name }`);

console.log("=== 2. PERBANDINGAN OBJEK ===")

let a = {};
let b = a;

console.log(a==b);
console.log(b==a);

let x = {};
let y = {};

console.log(x==y);
console.log(x===y);

console.log("=== 3. MENGGANDAKAN KLONING OBJEK / GANDA ===");

let userAsli = {
    nama : "Lufy",
    umur : 18
}


// METODE A
let cloneA = {};
for (let key in userAsli){
    cloneA[key] = userAsli[key];
}

cloneA.nama = "Joko";
console.log(userAsli.nama);
console.log(cloneA.nama);

// METODE B
let cloneB = Object.assign({}, userAsli);
cloneB.nama = "Budi";
console.log(userAsli.nama);
console.log(cloneB.nama);

// METODE C
let cloneC = {...userAsli};
cloneC.nama = "Caca";
console.log(userAsli.nama);
console.log(cloneC.nama);








