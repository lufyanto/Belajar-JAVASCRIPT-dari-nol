const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gameTebakAngka() {
  const angkaRahasia = Math.floor(Math.random() * 10) + 1;
  let percobaan = 0;

  console.log("=== GAME TEBAK ANGKA (1-10) ===");

  function tanyaTebakan() {
    rl.question('Tebak angka antara 1 sampai 10: ', (input) => {
      const tebakan = parseInt(input);
      percobaan++;

      if (isNaN(tebakan)) {
        console.log("Masukkan angka yang valid ya!\n");
        tanyaTebakan();
      } else if (tebakan < angkaRahasia) {
        console.log("Terlalu KECIL! Coba lagi.\n");
        tanyaTebakan();
      } else if (tebakan > angkaRahasia) {
        console.log("Terlalu BESAR! Coba lagi.\n");
        tanyaTebakan();
      } else {
        console.log(`\n🎉 MANTAP BENAR! Angkanya adalah ${angkaRahasia}.`);
        console.log(`Kamu menebak sebanyak ${percobaan} kali.`);
        rl.close(); // Tutup input terminal
      }
    });
  }

  tanyaTebakan();
}

gameTebakAngka();