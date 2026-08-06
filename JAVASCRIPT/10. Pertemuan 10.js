class catatan{
// Synchronous
// Proses secara bertahap (nunggu proses A selesai)


// Asynchronous
// Berjalan secara beriringan (Bareng")

    // Concurensi dan Paralel
        // Concurensi Bertugas secara beriringan : contoh "Pedagang nasi goreng yg menyajikan dan memsak nasi goreng secara bersamaaan"
        // Paralel bertugas sesuai dengan role nya : contoh "pedagang yg dibantu oleh teman/sodaranya"

    // Promise
        // Pending => Berjalan tapi belum mencapai hasil akhir
        // Fullfilled => Promised Berhasil
        // Rejected => Janji berjalan tapi GAGAL
    // Kasus Promise
        //Konversi teks to HTML
            // Usecase
            // ZIP => ekstrak => read file => Konversi
        //Konversi teks scrapping ke JSON

    // ASYNC WITH AWAIT => PROMISE
        // Tujuan
            // Membuat impleentasi promise lebih mudah
            // Alur promise lebih clear, inline style
            // menghindari redudansi yg tidak diperlukan

}

class syncronus{
    masakMie(){
        this.Persiapan();
        
        console.log("Masak Mie hingga matang");

        this.sajikan();
    }

    Persiapan(){
        console.log('Siapkan alat dan bahan');
    }

    sajikan(){
        console.log("Sajikan Mie");
    }
}

// PROMISE
const janjiAntarMakanan = new Promise((resolve, reject) => {
    let makananTersedia = false;

    setTimeout(() => {
        if (makananTersedia) {
            resolve("Makanan Berhasil Diantar (SUKSES)");
        } else {
            reject("Warung Makan Tutup, Pengantaran gagal (FAILED)");
        }
    }, 2000);
});

janjiAntarMakanan
    .then((hasil) => {
        console.log(hasil);
    })
    .catch((error) => console.error(error));

// Async/Await
const extractZip = (fileZip) => {
    return new Promise((resolve) => {
        setTimeout(() => { 
            console.log("Alhamdulillah, ZIP berhasil diekstrak");
            resolve("Extracted_files/content.txt");
        },1500);
    });
};

const readFile = (filePath) => {
    return new Promise((resolve) => { 
        setTimeout(() => {
            console.log("Alhamdulillah, File ini berhasil ana BAACAA");
            resolve("# Judul Artikel\nIni adalah isi teks dari berkas");
        },1000);
    });
};

const convertToHTML = (markdownText) => { 
    return new Promise((resolve) => {
        const html = markdownText.replace("# ", "<h1>") + "</h1>";
        resolve(html);
    });
};

async function prosesEkstraksikeHTML(pathZIP) {
    try{
        console.log("Mulai memprosess file.....");
        console.log("Mulai memprosess file.....10%");
        console.log("Mulai memprosess file.....20%");
        console.log("Mulai memprosess file.....30%");
        console.log("Mulai memprosess file.....40%");
        console.log("Mulai memprosess file.....50%");
        console.log("Mulai memprosess file.....60%");
        console.log("Mulai memprosess file.....70%");
        console.log("Mulai memprosess file.....80%");
        console.log("Mulai memprosess file.....90%");
        console.log("Mulai memprosess file....100%");

        const filePath = await extractZip(pathZIP);
        const rawText = await readFile(filePath);
        const htmlresult = await convertToHTML(rawText);

        console.log("\nHasil Akhir HTML:\n" + htmlresult);
    } catch (error) {
        console.error("Terjadi Kesalahan");
    }
}

prosesEkstraksikeHTML("Ijazah_Jokowi.zip");

// SCRAPING KE FORMAT JSON
const scrapeWebsite = (url) => {
    return new Promise((terima, tolak) => {
        setTimeout(() => {
            const isBerhasil = true;
            if (isBerhasil) {
                terima("Nama : Lenovo Thinkpad X13 G1 | Harga : 4600000 | Stok : 10");
                terima("Nama : Lenovo Thinkpad X13 G2 | Harga : 5200000 | Stok : 10");
                terima("Nama : Lenovo Thinkpad X13 G3 | Harga : 6600000 | Stok : 10");
            } else {
                tolak("Gagal Terhubung ke Website");
            }
        },2000);
    });
};

async function scrapeAndParseToJSON(url) {
    try{
        console.log(`Mengambil data dari ${url}`);

        const rawData = await scrapeWebsite(url);
        console.log("Data mentah berhasil diterima: ", rawData);

        const parts = rawData.split(" | ")
        const jsonObject = {
            Nama_Produk: parts[0].split(": ")[1],
            Harga: Number(parts[1].split(": ")[1]),
            Stok: Number(parts[2].split(": ")[1]),
            scrapeAt: new Date().toISOString()
        };

        console.log("\nHasil Konversi JSON: ", JSON.stringify(jsonObject, null, 2));
    } catch(error){
        console.error("Error pada Scraping: ", error);
    }
    
}

scrapeAndParseToJSON("https://example.com/produk");
