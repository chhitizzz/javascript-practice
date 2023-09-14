// Function that takes a student object as input and returns their average grade

function averageGrade(student) {
    const grades = student.grades;
    if (grades.length === 0) {
        return 0;
    }

    const sum = grades.reduce((acc, grades) => acc + grades, 0);
    const average = sum / grades.length;

    return average;
}