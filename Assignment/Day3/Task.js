//Task 1

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0])

console.log(fruits[3])

console.log(fruits.length)

//Task2

const colors = ["Red", "Green", "Blue"];

colors.splice(1,1,'yellow')

console.log(colors)

//Task3

const numbers = [10, 20, 30, 40];

for(i=0;i<= numbers.length-1;i++){
    console.log(numbers[i])
}

for(i=0;i<= numbers.length-1;i++){
    console.log(numbers[i]*numbers[i])
}

//Task4

const data = [
  ["Arun", 22],
  ["Ravi", 25],
  ["Kumar", 28]
];

console.log('Ravi age :',data[1][1])

console.log(" Kumar's name :",data[2][0])

//Task5

const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
];

console.log(users[0].name)

console.log(users[1].id)

//Task6

const student = {
  name: "Arun",
  age: 22,
  course: "MERN"
};

console.log(student.name)

console.log(student.course)

//Task7

const car = {
  brand: "BMW",
  year: 2020
};

car.year = 2024

car.color = 'black'

console.log(car)

//Task8

const employee = {
  name: "Ravi",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};

console.log(employee.address.city)

console.log(employee.address.pincode)

//Task9

const product = {
  name: "Laptop",
  features: ["16GB RAM", "512GB SSD", "i7 Processor"]
};

console.log(product.features[1])

console.log(product.features.length)

//Task10

const students = [
  { name: "Arun", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Kumar", marks: 90 }
];

for(i=0;i<=students.length-1;i++){
    if(students[i].marks > 50){
       console.log(students[i].name)
    }
}

