//loops o bucles

//for
for (let i = 1; i < 6; i++) {
    //console.log("El valor de i es: " + i);
    console.log(`El valor de i es: ${i}`);
}

const numbers = [10, 20, 30, 40, 50];

for(let i = 0; i < numbers.length; i++) {
    console.log(`El número en la posición ${i} es: ${numbers[i]}`);
}

//while
let count = 0;
while (count < 5) {
    console.log(`El valor de count es: ${count}`);
    count++;
}   

//do...while
let i= 0;
do{
    console.log(`El valor de i es: ${i}`);
    i++;
}
while(i < 20);

//break y continue
for (let j = 1; j <= 10; j++) {
    if (j === 6) {
        continue;
    }
    if (j === 8) {
        break;
    }
        console.log(`El valor de j es: ${j}`);
    }
