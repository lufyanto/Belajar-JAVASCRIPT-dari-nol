
class AkunBank {
    #saldo;

    constructor(saldoAwal){
        this.#saldo = saldoAwal;
    }

    getSaldo(){
        return this.#saldo;
    }

    setorUang(jumlah){
        if (jumlah <= 0) {
            console.log('Jumlah setor harus lebih dari 0!');
            return;
        }
        
        this.#saldo += jumlah;
        console.log(`Berhasil setor senilai Rp.${jumlah}. saldo anda: Rp.${this.#saldo}`);
    }
}

let dompet = new AkunBank(19000000);
dompet.setorUang(5000000);
