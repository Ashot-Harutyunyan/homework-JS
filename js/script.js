// Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
// name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// И метод getFullName() - имя и фамиля работника.

class Worket {
    constructor(name, surname, rete, days){
        this.name = name
        this.surname = surname
        this.rete = rete
        this.days = days
    }
    getSalary(){
        return `employee salary ${this.name} ${+this.rete * this.days}$`
    }
    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

const employeeOne = new Worket('Anita', 'Jacobs', 25, 60)
const employeeTwo = new Worket('Kaylee', 'Rich', 30, 40)
const employeeThree = new Worket('Gregory', 'Dickson', 15, 90)


console.log(employeeOne)
console.log(employeeOne.getFullName())
console.log(employeeOne.getSalary())
console.log(employeeTwo)
console.log(employeeTwo.getFullName())
console.log(employeeTwo.getSalary())
console.log(employeeThree)
console.log(employeeThree.getFullName())
console.log(employeeThree.getSalary())

// Напишите новый класс Boss, этот класс наследуется от класса Worker зи прошлого задания. 
// Появляется новые свойство: workers - количество работников. И зарплата считается по другому:
// произведение (умножение) ставки rate на количество отработанных дней и на количество работников

class Boss extends Worket {
    constructor(name, surname, rete, days, workers){
        super(name, surname, rete, days)
        this.workers = workers
    }
    getSalary(){
        return `employee salary ${this.name} ${+this.rete * this.days * this.workers}$`
    }
}

const boss = new Boss('David', 'Harding', 35, 90, 3)

console.log(boss)
console.log(boss.getFullName())
console.log(boss.getSalary())