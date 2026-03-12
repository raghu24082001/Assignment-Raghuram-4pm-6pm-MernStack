import React from 'react'
import { useParams } from 'react-router-dom'

const Useurlparam = () => {

  const {productid} = useParams()

  console.log(productid)

  const datas= [
    {
      id:1,
      Name:'raghu',
      subject:'Mern'
    },

      {
      id:2,
      Name:'ram',
      subject:'python'
    },
      {
      id:3,
      Name:'vijay',
      subject:'java'
    }
  ]
  const SecDatas = datas.find((e)=>(e.id == productid))

 console.log(SecDatas)
  return (
    <>
    
    <div className='bg-red-600 text-2xl h-50 flex items-center justify-center gap-20'>
        
          <div  className='bg-white rounded p-2 '>
                <div>
                  <p>{SecDatas.Name}</p>
                <p>{SecDatas.subject}</p>
                
                </div>
                
          </div>
          </div>

    
    </>
  )
}

export default Useurlparam