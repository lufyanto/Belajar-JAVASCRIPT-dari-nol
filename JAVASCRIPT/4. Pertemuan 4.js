const productMap = new Map([
['shoes', 500],
['cap', 300],
['jeans', 700]
]);

console.log(productMap);

const map = new Map();
map.set('Lufy', 100);
map.set('Zero', 200);
map.set('Rusdi', 400)
console.log(map);

const himu = new Map();
himu.set(1 , 'Lufy');
himu.set(2 , 'Najib');
himu.set(3, 'Sihab');
himu.set(4, 'Nizam');
console.log(himu);

// Ngambil data dari himu

console.log(himu.get(1));
console.log(himu.get(2));

// Ngapus data dari himu     

himu.delete(4);
console.log(himu);

// Menstruturkan Data dengan set

const joko = new Set([1,2,3,4]);
console.log(joko);

const koding = new Set();

koding.add(1);
koding.add('Python');
koding.add(2);
koding.add('JavaScript');

console.log(koding);

const angka = new Set();

angka.add(1, 'Raihan');
angka.add(2, 'Najib');
angka.add(3, 'Sihab');
angka.add(4, 'Nizam');

for (const number of angka) {
    console.log(number, name);
}



