import React, { useState } from 'react'

const App = () => {
      const[count,setCount] = useState(0)
      const [toggle,setToggle] = useState(true)
      const [data,setData] = useState({
        name:'Raghu',
        age:20
      })
      const [showData,setShowData] = useState(data)

      const Increase = ()=>(
        setCount(count+1)
      )

      const Decrease = ()=>(
        setCount(count-1)
      )

      const  Reset = ()=>(
        setCount(0)
      )
      
      const changeText= ()=>(
        setToggle(!toggle)
      )

      const handleChange = (e)=>(
        setData({...data, [e.target.name]:e.target.value})
      )

      const modifyData = ()=>(
        setShowData(
          data
        )
      )

      


  return (
    <>
     <div className='h-121 flex flex-col gap-5 items-center justify-center'>
        <div className='bg-red-300 p-10 rounded flex flex-col gap-5 items-center justify-center'>
            <div><p className='text-2xl'>{count}</p></div>
       <div className='flex gap-10 '>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={Increase}>Increase</button>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={Reset}>Reset</button>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={Decrease}>Decrease</button>
       </div>
        </div>

        <div className='bg-red-300 p-10 rounded flex flex-col gap-5 items-center justify-center'>
            <div><p className='text-2xl'>{toggle ? 'Online': 'Offline'}</p></div>
       <div className='flex gap-10 '>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={changeText}>Toggle</button>
       </div>
        </div>

        <div className='bg-red-300 p-10 rounded flex flex-col gap-5 items-center justify-center'>
            <div><p className='text-2xl'>{showData.name}</p>
            <p className='text-2xl'>{showData.age}</p>
        </div>
       <form  onSubmit={(e)=>e.preventDefault()} className='flex flex-col gap-5' >
             <input type="text" onChange={handleChange} name='name' className='bg-white '/>
            <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={modifyData}>Change</button>
       </form>
        </div>
       
     </div>
    </>
  )
}

export default App