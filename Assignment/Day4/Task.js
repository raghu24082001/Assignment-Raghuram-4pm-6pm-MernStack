//Task 1

//Hoisting

console.log(raghu)

//During hoistin it takes declaration part at top of the scope.
//using var class defaultly assigned a undefined to a variable by javascript.

var raghu;


const e = '2'

const f = 2

//string concatination

console.log(e + f)

//numeric coersion

console.log(e * f)



//Task 2

function calculateTotal(price, qty){
    const ans = Number(price) * Number(qty)
    console.log(ans)
}

calculateTotal('2','4')

//Task3

const a = 1

const b = '1'

const c = 0

const d = false

console.log(a==b)

console.log(a===b)

console.log(c==d)

console.log(c===d)

//Task4

console.log('Task 4')

function checkBoolean(name){
    if(name){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

checkBoolean(' ')

