// OBJECT

const user = {
    name : "Lufyanto",
    lastname : "Eka Fahrezi",
    age : 19
}

console.log(user);
console.log(user.name);
console.log(user.lastname);
console.log(user.name.age);

const {name, lastname, age} = user;
console.log(name, age);

// Ngapus value object
delete user.lastname;
// Ngubah value object
user.name = "Nizam Hasbi Jawa";
console.log(user.name);
console.log(user.lastname); // <=== Nama sudah di HAPUS

delete user["age"];
console.log(user.age); // <=== Umur sudah di HAPUS

// ARRAY

// nama = ["Joko", "Budi", "Siti", "Lala"];

// console.log(typeof nama);

// const angka = Array.from("Jokowi");
// console.log(angka);

// const namanama = new Array("Joko", "Budi", "Siti", "Lala");
// const nama2 = Array.from(namanama);
// console.log(nama2);

// Manipulasi Array

let buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Semangka", "Nanas"];
console.log(buah);

console.log(buah[4]);

buah[0] = "Durian";
console.log(buah);

buah.push("Nasi goreng");
console.log(buah);

delete buah[6];
console.log(buah);

buah.splice(1,3);
console.log(buah);

let sayur = ["Bayam", "Kangkung", "Wortel", "Brokoli"];
console.log(sayur);

sayur.pop()
console.log(sayur);

sayur.shift()
console.log(sayur);

// DESTRUCTURING

const data = ["Lufyannto", "Teknologi Informasi", "Universitas Bina Sarana Informatika", 1726085];
const [nama,jurusan,univ,id] = data ;

console.log(`Halo nama saya ${nama}, saya kuliah di ${univ} jurusan ${jurusan} dengan id mahasiswa ${id}`);

// REVERSE N SORT

koding = ["CSS", "HTML", "JS", "PY", "CPP"]
koding.reverse();
console.log(koding); //<--- membalik urutan array

koding.sort();
console.log(koding); //<--- menyortis sesuai abjad