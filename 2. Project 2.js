// PROJECT KASIH WARUNG PADANG

function summary(kode, qty){
    let Menu = "";
    let harga = "";

    switch (kode){
        case 1:
            Menu = "Nasi Ayam Pop";
            harga = 13000;
            break;
        case 2:
            Menu = "Nasi Ayam Sayur Gede";
            harga = 15000;
            break;
        case 3:
            Menu = "Nasi Rendang";
            harga = 17000;
            break;
        case 4:
            Menu = "Nasi Daging Cincang";
            harga = 20000;
            break;
        case 5:
            Menu = "Nasi Telor Padang";
            harga = 10000;
            break;
        case 6:
            Menu = "Es Teh";
            harga = 5000;
            break;
        case 7:
            Menu = "Air Mineral";
            harga = 3000;
            break;
        default:
            console.log("Error : Pilihan Menu Tidak Valid !!")
            return;
    }

    let total = harga * qty;

    console.log("===== STRUK PEMBAARAN =====");
    console.log("===== RM TRIJAYA MINANG =====");
    console.log(`Menu\t\t: ${Menu}`);
    console.log(`Jumlah\t\t: ${qty}`);
    console.log(`Harga\t\t : Rp.${harga}`);
    console.log('------------------------------');
    console.log(`Total\t\t\t\t: Rp. ${total}`);

}

summary(1,4);
summary(2,2);