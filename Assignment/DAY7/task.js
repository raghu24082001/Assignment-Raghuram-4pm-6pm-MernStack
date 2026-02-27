//Task 1

function createProfile({name,age,role="developer"}){

     console.log(`${name} age is ${age} . worked as a ${role}`)
    
}



createProfile({name:'raghu',age:24 })

//Task 2

const calculateTotal = (discount, ...prices)=>{
    const total = prices.reduce((a,b)=>a+b) 
    const finalTotal = total - (total * discount / 100)
    return finalTotal
}

console.log(calculateTotal(10, 100, 200, 300))

//Task 4

const data = [
{ name: "A", marks: 80 },
{ name: "B" },
{ name: "C", marks: 60 }
]

let data1 = []

data.map((a)=>{
    data1.push(`${a.name} scored ${a.marks ?? 0}`)
})

console.log(data1)

console.log(['raghu','ram'])