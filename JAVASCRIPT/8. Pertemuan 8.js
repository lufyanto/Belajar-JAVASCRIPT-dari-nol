class Mahasiswa {
    constructor(nama, prodi, ipk){
        this.nama = nama;
        this.prodi = prodi;
        this.ipk = ipk;
    }

    mahasiswa(){
        console.log(`\n${this.nama} Adalah Mahasiswa Universitas Bina Sarana Informatika\n dia dari prodi ${this.prodi}\n IPK nya berjumlah ${this.ipk}`);
    }
}

const mahasiswa1 = new Mahasiswa('Lufyanto', 'Teknologi Informasi', 4.0);
const mahasiswa2 = new Mahasiswa('Fauzi', 'Ilmu Komunikasi', 3.86);
const mahasiswa3 = new Mahasiswa('Dika', 'Sistem Informasi', 3.88);

mahasiswa1.mahasiswa();
mahasiswa2.mahasiswa();
mahasiswa3.mahasiswa();

class Welcome {
    constructor(name,title){
        this.name = name;
        this.title = title;
    }

    hi(){
        console.log(`Hi, ${this.name} 🙌`);
        console.log(`Selamat Datang di JagoNgoding 🫆`);
        console.log(`Si Paling ${this.title}`);
    }
}

const user = new Welcome('Lufyanto', 'Vibe Coder');

user.hi();

function SmartPhones(color, brand, model) {
  this.color = color;
  this.brand = brand;
  this.model = model;
}

SmartPhones.prototype.charging = function() {
  console.log(`Charging ${this.model}`);
};

function iOS(color, brand, model) {
  SmartPhones.call(this, color, brand, model);
}

iOS.prototype = Object.create(SmartPhones.prototype);
iOS.prototype.constructor = iOS;

iOS.prototype.airDrop = function() {
  console.log('iOS have a behavior AirDrop');
};

function Android(color, brand, model) {
  SmartPhones.call(this, color, brand, model);
}

Android.prototype = Object.create(SmartPhones.prototype);
Android.prototype.constructor = Android;

Android.prototype.splitScreen = function() {
  console.log('Android have a Split Screen');
};

const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

ios.charging(); // Output: Charging 12 Pro Max
ios.airDrop(); // Output: iOS have a behavior AirDrop

android.charging(); // Output: Charging Galaxy S21
android.splitScreen(); // Output: Android have a Split Screen