class Student {
    constructor(name, age, averageScore) {
        this.name = name;
        this.age = age;
        this.averageScore = averageScore;
        Student.students.push(this);
        if (averageScore > Student.maxScore) {
            Student.maxScore = averageScore;
        }
    }

    increaseAge = () => {
        this.age++;
    }

    increaseAverageScore = (amount) => {
        this.averageScore += amount;
    }

    getStatus = () => {
        if (this.averageScore >= 90) {
            return "отличник";
        } else if (this.averageScore >= 75) {
            return "хорошист";
        } else if (this.averageScore >= 60) {
            return "троечник";
        } else {
            return "неуспевающий";
        }
    }

    static maxScore = 0;
    static students = [];

    static getMaxScore = () => {
        return Student.maxScore;
    }

    static filterByScore = (minScore) => {
        return Student.students.filter(student => student.averageScore > minScore);
    }
}

const student1 = new Student("Билл Гейтс", 20, 85);
const student2 = new Student("Илон Маск", 22, 95);
const student3 = new Student("Студент ЧГУ", 21, 70);

student1.increaseAge();
student2.increaseAverageScore(5);

console.log(student1.getStatus()); // хорошист
console.log(student2.getStatus()); // отличник
console.log(student3.getStatus()); // троечник

console.log(Student.getMaxScore()); // 95

const filteredStudents = Student.filterByScore(80);
console.log(filteredStudents.map(student => ({ name: student.name, age: student.age, averageScore: student.averageScore })));