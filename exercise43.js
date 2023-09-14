// Function that takes a student object as input and returns their average grade

function averageGrade(student) {
    const grade = student.grades;
    if (grade.length === 0) {
        return 0;
    }

    const sum = grade.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grade.length;

    return average;
}

const student = {
    name: "John",
    age: 21,
    grades: [81, 75, 62, 54, 48]
};

const result = averageGrade(student);
console.log(result); // Output: 64