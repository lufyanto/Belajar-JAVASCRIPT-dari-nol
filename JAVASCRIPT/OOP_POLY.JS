// KELAS DASAR
class Pelanggan {
    constructor(nama, totalBelanja) {
        this.nama = nama;
        this.totalBelanja = totalBelanja;
    }

    hitungTotal() {
        return this.totalBelanja;
    }
}
class Silver extends Pelanggan {
        hitungTotal() {
            return this.totalBelanja * 0.95;
        }
    }

class Gold extends Pelanggan {
        hitungTotal() {
            return this.totalBelanja * 0.85;
        }
    }

// POLYMORPHISM ACTION

function cetakTagihan(pelanggan) {
    console.log(`Tagihan untuk ${pelanggan.nama}: Rp.${pelanggan.hitungTotal()}`);
}

const user1 = new Pelanggan('Budi', 1000000);
const user2 = new Silver('Sinta', 1000000);
const user3 = new Gold('Bagas', 1000000);

cetakTagihan(user1);
cetakTagihan(user2);
cetakTagihan(user3);