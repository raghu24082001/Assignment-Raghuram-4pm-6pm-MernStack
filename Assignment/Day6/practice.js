let cart = [];
cart.push("Mobile");
cart.push("Laptop");
cart.push("Headset");
let removedItem = cart.pop();
console.log(cart);
console.log(removedItem);

let arr1 = [10, 20, 30, 40];
arr1.shift();
arr1.unshift(5);
console.log(arr1);

let skills = ["HTML", "CSS", "JavaScript"];
if (!skills.includes("React")) {
  skills.push("React");
}
console.log(skills);

let nums1 = [1, 2, 3, 4, 5];
let middle = nums1.slice(1, 4);
console.log(middle);

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 2, 100, 200);
console.log(arr2);

let a = [1, 2];
let b = [3, 4];
let result1 = a.concat(b);
console.log(result1);

let tech = ["JS", "React", "Node"];
let str = tech.join(" - ");
console.log(str);

let nums2 = [5, 2, 9, 1];
nums2.sort((a, b) => a - b);
console.log(nums2);
nums2.sort((a, b) => b - a);
console.log(nums2);

let arr3 = [1, 2, 3, 4];
arr3.reverse();
console.log(arr3);

let arr4 = [10, 20, 30];
let index = arr4.indexOf(20);
if (index === -1) {
  console.log("Not Found");
} else {
  console.log(index);
}

let nums3 = [1, 2, 3, 4];
let result2 = nums3.map(n => n * 5);
console.log(result2);

let users1 = [
  { name: "Sudhan", age: 22 },
  { name: "Ravi", age: 25 }
];
let names1 = users1.map(user => user.name);
console.log(names1);

let nums4 = [10, 15, 20, 25, 30];
let result3 = nums4.filter(n => n > 20);
console.log(result3);

let products1 = [
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 }
];
let result4 = products1.filter(p => p.price > 10000);
console.log(result4);

let nums5 = [100, 200, 300];
let total1 = nums5.reduce((acc, curr) => acc + curr, 0);
console.log(total1);

let cart2 = [
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 }
];
let names2 = cart2.map(p => p.name);
let filtered = cart2.filter(p => p.price > 5000);
let total2 = cart2.reduce((sum, p) => sum + p.price, 0);
let hasCheap = cart2.some(p => p.price < 3000);
console.log(names2);
console.log(filtered);
console.log(total2);
console.log(hasCheap);

let marks = [80, 60, 30, 90, 50];
let high = marks.filter(m => m > 70);
let allPassed = marks.every(m => m >= 35);
let failed = marks.find(m => m < 35);
let avg = marks.reduce((a, b) => a + b, 0) / marks.length;
console.log(high);
console.log(allPassed);
console.log(failed);
console.log(avg);

let arr5 = [1, 2, 2, 3, 4, 4, 5];
let unique = arr5.filter((item, index) => arr5.indexOf(item) === index);
console.log(unique);

let users2 = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 20 }
];
let grouped = users2.reduce((acc, user) => {
  if (!acc[user.age]) {
    acc[user.age] = [];
  }
  acc[user.age].push(user);
  return acc;
}, {});
console.log(grouped);

let arr6 = [[1, 2], [3, 4], [5]];
let flat = arr6.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);