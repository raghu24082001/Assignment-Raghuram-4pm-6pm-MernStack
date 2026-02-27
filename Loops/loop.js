// const a = 5

// for(i=1;i<=a;i++){

//     var b=''

//     for(j=1;j<=i;j++){
//      b+='* '
//     }
//     console.log(b)
// }

// const d = [1,2,3]
// let c= []

// for(i=0;i< d.length;i++){
   
//    c.push(d[i]*2)
    
// }

// console.log(c)

const data = ['raghu', 'ram','ravi','athi']

let datas=[]

data.map((a,b)=>{

    datas.push({ [b] : a}) 
    
}) 

console.log(datas)

const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(i=0;i< values.length;i++){
    if(i%2===0){
      console.log(values[i])
    }
}

const final = values.reduce((a,b)=> a+b)

console.log(final)

let a = 1;

for(let i=0;i< values.length;i++){
    
    a*= values[i]

}
console.log(a)




