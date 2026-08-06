// PURE AND IMPURE FUNC

// IMPURE
let value = 3;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3

// PURE

function adddWith(vallue, adddingValue) {
  return vallue + adddingValue;
}
const result11 = adddWith(0, 1);
console.log(`result1 is ${result11}`); // Output: result1 is 1

const result22 = adddWith(result11, 1);
console.log(`result2 is ${result22}`); // Output: result2 is 2

const result33 = adddWith(result22, 1);
console.log(`result3 is ${result33}`); // Output: result3 is 3

console.log(result11, result22, result33); // Output: 1, 2, 

//CONTOH IMPURE
let count = 0;
function increment() {
    count++;
}

function getCurrentTime(){
    return new Date().toLocaleDateString();
}

function updateUser(user){
    user.name = "Update Name";
}

const fs = require('fs');

function writeToFile(data) {
    fs.writeToFileSync('data.txt', data)
}

// PURE
function calculateTotalPrice(orderItems) {
  return orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// HOF

function apply(operation, ...args){
    return operation(...args)
}

function sum(a,b,c){
    return a+b+c;
}

function discount(disc, value){
    return value - ((disc/100)*value);
}

const productPrice = apply(sum, 100,150,200);
const withDiscount = apply(discount, 25, productPrice)

console.log('Product Price ==>', productPrice);
console.log('With discount 25% ==>', withDiscount)

// REKURSIF
function polabilangan(n){
    if(n<0){
        return [];
    }

    return [...polabilangan(n-1), n];
}

console.log(polabilangan(100))

// IMMUTABILITY

function max(arrayOfNumbers) {
  return arrayOfNumbers
    .sort((a, b) => a - b)
    .pop();
}

const numbers = [10, 23, 24, 7, 42, 18,100,200,345,543,678,888];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]