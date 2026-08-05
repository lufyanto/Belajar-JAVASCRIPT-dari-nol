class Notifikasi {  // <=== INDUK CLASS
    constructor(penerima){
        this.penerima = penerima;
    }

    kirim(){
        console.log(`Mengirim notifikasi ke ${this.penerima}`);
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
    }
}
class EmailNotif extends Notifikasi{ // <=== SUB CLASS
    constructor(penerima, subjek){
        super(penerima);
        this.subjek = subjek;
    }

    lampirkanFile(namaFile){
        console.log('File sukses')
        console.log(`Melampirkan File ${namaFile} untuk ${this.penerima}`);
    }
} 

const emailPendaftaran = new EmailNotif('user@gmail.com','selamat datang');
emailPendaftaran.kirim();
emailPendaftaran.lampirkanFile('syarat.pdf');