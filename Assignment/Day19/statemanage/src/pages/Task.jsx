import React, { useState } from 'react'


const Task = () => {
      const[count,setCount] = useState(0)
      const[doublecount,setDoubleCount] = useState(0)
      const [toggle,setToggle] = useState(true)
      const [data,setData] = useState({
        name:'Raghu',
        age:20
      })
      const [showData,setShowData] = useState(data)

      const Increase = ()=>(
        setCount((prev)=>prev+1)
      )

      const IncreaseTwice = ()=>(
        setDoubleCount((prev)=>prev+2)
      )

      const Decrease = ()=>(
        setDoubleCount((prev)=>prev-1)
      )

      const DecreaseTwice = ()=>(
        setCount((prev)=>prev-2)
      )

      const  Reset = ()=>(
        setCount(0)
      )
      
      const changeText= ()=>(
        setToggle((prev)=>!prev)
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
     <div className='h-130   flex flex-col gap-5 items-center justify-center'>
        <div className='bg-red-300  p-5 rounded flex flex-col gap-5 items-center justify-center'>
            <div><p className='text-2xl'>{count}</p></div>
       <div className='flex gap-10 '>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={Increase}>Increase</button>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={Reset}>Reset</button>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={Decrease}>Decrease</button>
       </div>
        </div>

        <div className='bg-red-300 p-5 p-10 rounded flex flex-col gap-5 items-center justify-center'>
            <div><p className='text-2xl'>{doublecount}</p></div>
       <div className='flex gap-10 '>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={IncreaseTwice}>Increase</button>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={Reset}>Reset</button>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={DecreaseTwice}>Decrease</button>
       </div>
        </div>

        <div className='bg-red-300 p-10 rounded flex flex-col gap-5 items-center justify-center'>
            <div><p className='text-2xl'>{toggle ? 'Hi There': ''}</p></div>
       <div className='flex gap-10 '>
           <button className='bg-blue-300 p-1 rounded text-white cursor-pointer' onClick={changeText}>{toggle ? 'Hide': 'show'}</button>
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

export default Task