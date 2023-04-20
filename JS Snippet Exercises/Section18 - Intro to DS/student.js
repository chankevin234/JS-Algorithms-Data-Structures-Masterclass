/*

First class

*/

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.lates = 0;
        this.scores = [];
    }

    // INSTANCE METHODS
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.lates += 1;
        if(this.lates >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.lates} times`;
    }

    addScore(score){
        this.scores.push(score);
        return this.scores
    }

    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }  

    // STATIC METHODS
    static enrollStudents() {
        return 'Enrolling students!';
    }
}

function main() {
    let studentA = new Student("Kevin", "Chan", 2012);
    console.log(studentA.fullName());
    console.log(studentA.markLate());
    console.log(studentA);

    console.log("Static Method: " + Student.enrollStudents());
}

main();
