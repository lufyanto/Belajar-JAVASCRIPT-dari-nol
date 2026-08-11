"use strict"; // Selalu gunakan mode modern [3]

// 1. Praktik PROMPT
// Kita meminta input nama dari pengguna. 
// Parameter kedua "" adalah nilai default agar tampilan rapi di semua browser [4, 5].
let namaPengunjung = prompt("Siapa nama Anda?", "Tamu");

// Jika pengguna menekan "Cancel", variabel akan bernilai null [6].
if (namaPengunjung === null) {
    namaPengunjung = "Orang Tanpa Nama";
}

// 2. Praktik CONFIRM
// Kita meminta konfirmasi dalam bentuk Boolean (true/false) [5].
let apakahSukaKoding = confirm(`Halo ${namaPengunjung}, apakah Anda suka belajar JavaScript?`);

// 3. Praktik ALERT
// Kita menampilkan pesan informasi berdasarkan hasil konfirmasi [5].
if (apakahSukaKoding) {
    alert("Luar biasa! Mari kita lanjut belajar ke tingkat Mahir.");
} else {
    alert("Tidak apa-apa, mungkin setelah mencoba praktik ini Anda akan suka!");
}

// Menampilkan rangkuman akhir di alert
alert(`Terima kasih telah berkunjung, ${namaPengunjung}!`);