class Student {
    constructor(name, age, averageScore) {
        this.name = name;
        this.age = age;
        this.averageScore = averageScore;
    }

    increaseAge = () => {
        this.age++;
    };

    increaseScore = (amount) => {
        this.averageScore += amount;
    };

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
    };

    static maxScore = 0;

    static getMaxScore = () => {
        return Student.maxScore;
    };

    static filterByScore = (students, score) => {
        return students.filter((student) => student.averageScore > score);
    };
}

// Пример использования класса "Студент"

// Создание нескольких студентов
const student1 = new Student("Николай", 20, 85);
const student2 = new Student("Сергей", 22, 95);
const student3 = new Student("Андрей", 21, 70);

// Увеличение возраста студента
student1.increaseAge();

// Увеличение среднего балла студента
student2.increaseScore(5);

// Получение статуса студента
console.log(student1.getStatus()); // хорошист
console.log(student2.getStatus()); // отличник
console.log(student3.getStatus()); // троечник

// Получение максимального балла
Student.maxScore = 95;
console.log(Student.getMaxScore()); // 95

// Фильтрация студентов по среднему баллу
const students = [student1, student2, student3];
const filteredStudents = Student.filterByScore(students, 80);
console.log(filteredStudents);