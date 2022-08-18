let randomNumber;
do {
    randomNumber = Math.random();
    console.log(randomNumber);
} while (randomNumber <= 0.7);
console.log("----------------------------------");
alert(randomNumber);

const array1 = [100, 200, 300, 400, 500];
for (let i=0; i<array1.length; i++) {
    console.log(array1[i]);
}
console.log("----------------------------------");

for (const element of array1) {
    console.log(element);
}
console.log("----------------------------------");

for (let i=array1.length-1; i>=0; i--) {
    console.log(array1[i]);
}
console.log("----------------------------------");
let rndNum1, rndNum2;
let ite = true;
while(ite) {
    rndNum1 = randomNumber = Math.random();
    console.log("Num1 ==>" + rndNum1);
    rndNum2 = randomNumber = Math.random();
    console.log("Num2 ==>" + rndNum2);
    if ((rndNum1 > 0.7 && rndNum2 > 0.7) || (rndNum1 <= 0.2 || rndNum2 <= 0.2)) {
        ite = false;
    }
}
alert("Num1 ==>" + rndNum1 + " Num2 ==>" + rndNum2);