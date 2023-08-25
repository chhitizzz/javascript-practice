// Function that takes a positive integer as input and prints a right-angled triangle of stars (*) with the given height

function printTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

printTriangle(6);