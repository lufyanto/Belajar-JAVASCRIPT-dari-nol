// Spread Operator

const data1 = [1,2,3];
const data2 = [4,5,6];
const data_spread = [...data1, ...data2] // <=== Data digabungkan menggunakan spread operator

console.log(data_spread);

const x = ['nama = Lufyanto', 'Prodi = Teknologi Informasi'];
const x_spread = [...x, 'Univ = UBSI Cikarang']
console.log(x_spread);

// Rest Operator

function prodi(...prodi) {
    console.log(`${'='.repeat(20)} PRODI KAMPUS ${'='.repeat(20)}`);
    console.log(`Prodi : ${prodi[0]}`);
    console.log(`Prodi : ${prodi[1]}`);
    console.log(`Prodi : ${prodi[2]}`);
}

prodi('Teknologi Informasi', 'Sistem Informasi', 'Sistem Komputer');



