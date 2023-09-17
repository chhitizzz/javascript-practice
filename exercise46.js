// Function that reverses a given string. For example, "hello" should return "olleh"

function reverseString(str) {

    let splitStr = str.split("");

    let reverseStr = splitStr.reverse();

    let joinStr = reverseStr.join("")

    return joinStr;
}

result = reverseString("hello");
console.log(result);