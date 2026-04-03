import React, { useMemo, useState } from 'react'

const App = () => {

  const [toggle, SetToogle] = useState(false)
  const [num,setNum] = useState(0)
  
  

  const handlechange = ( e) => {

    let arr = []
    for(let i=0; i<=num; i++){
      arr.push(i)
    }
      
     let newarr = arr.sort((a, b) => b - a)

      console.log(newarr)

  }

const handleChange2 = (e) => {

}


  const memoizedValue = useMemo(() => handlechange(num), [num])
 
  
  return (
    <>
      <div className={toggle ? 'bg-red-300' : 'bg-yellow-300'}>Hello</div>
      <button className='border rounded m-2 p-1' onClick={() => SetToogle(!toggle)}>Toggle Theme</button>
      <input type="text" onChange={(e)=> setNum(e.target.value)}/>
      <button className='border rounded m-2 p-1' onClick={()=> handlechange(num)}>Click me</button>

    </>
  )
}

export default App