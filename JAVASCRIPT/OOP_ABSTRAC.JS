class PaymentProcessor{
    //Metode PUBLIC

    prosesPembayaran(jumlah){
        this.#konekKeServer();
        this.#autentikasiTransaksi(jumlah);
        this.#debitKredit(jumlah);
        console.log(`Pembayaran sejumlah Rp.${jumlah} berhasil!`);
    }

    //Metode Private
    #konekKeServer(){
        console.log('Menguhubngkan ke server bank secara aman.....');
        console.log('.....Menguhubngkan ke server bank berhasil');
    }

    #autentikasiTransaksi(jumlah){
        console.log(`Verifikasi kecukupan saldo anda untuk transaksi sejumlah Rp.${jumlah}......`);
        console.log('.....Verifikasi berhasil');
    }

    #debitKredit(jumlah){
        console.log('.......... please wait 10%..........')
        console.log('.......... please wait 20%..........')
        console.log('.......... please wait 30%..........')
        console.log('.......... please wait 40%..........')
        console.log('.......... please wait 50%..........')
        console.log('.......... please wait 70%..........')
        console.log('.......... please wait 80%..........')
        console.log('.......... please wait 90%..........')
        console.log('.......... please wait 95%..........')
        console.log('.......... please wait 100%.........')
        console.log(`Memproses pemindahan dana anda.....`);
    }
}

const gateaway = new PaymentProcessor();
gateaway.prosesPembayaran(125000);