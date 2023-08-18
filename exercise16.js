// Function that takes a number as input and prints a multiplication table for that number up to 10

function multiplicationTable(number) {
    console.log(`The multiplication table of ${number} is:`);
    for (let i = 1; i <= 10; i++) {
        result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

multiplicationTable(10);