// function revString(name){
//       let Data2 = ''

//       const data1 = name.split('')

//       for(i = data1.length - 1 ;i >= 0 ;i--){
//              Data2 += data1[i]
//       }

//       console.log(Data2)
// }

// revString('Raghu')


// function palindrome(name){
//          let Data2 = ''

//       const data1 = name.split('')

//       for(i = data1.length - 1 ;i >= 0 ;i--){
//              Data2 += data1[i]
//       }
//       if( name === Data2){
//         console.log("palindrome")
//       }else{
//         console.log("Not palindrome")
//       }
// }

// palindrome('12321')

//map

// const numbers = [1,2,3,4,5]

// const numbers2 = numbers.map((n)=> n*n)

// console.log(numbers2)

//Filter

// const data1= [1,2,3,4,5,6,7,8,9,10]

// const data2 = data1.filter((a)=>{
//      if(a%2===0){
//         return a 
//     }
// }  
//   )

//   console.log(data2)

//Reduce

//   const data3 = data1.reduce((a,b)=>
//      a+b,0)

//     console.log(data3)

//Flat array

const data4 = [1, [2, [3, 4]]]

console.log(data4.flat().flat())

//custom version of map

const d = [1,2,3]
let c= []

for(i=0;i< d.length;i++){
   
   c.push(d[i]*2)
    
}

console.log(c)

// == check the values.

//=== check the value and datatype.

//find missing number

function missingNum(array,number){
    const dulArray = []
     for(let i=0;i<=number;i++){

        
           if(!array.includes(i)){
              dulArray.push(i)
           }
     }
      console.log(dulArray)
}

missingNum([1,2,3,4],10)


