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
