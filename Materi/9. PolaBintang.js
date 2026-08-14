let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "*";
    let space = ' ';
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
}
for (let i = n - 1; i >= 1; i--) {
    let str = "*";
    let space = ' ';
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
}

let a = 10;
for (let x = 1; x <= n ; x++){
    let bintang ="*";
    let spasi = " ";
    console.log(spasi.repeat(n-x) + bintang.repeat(x * 2 -1));
}
