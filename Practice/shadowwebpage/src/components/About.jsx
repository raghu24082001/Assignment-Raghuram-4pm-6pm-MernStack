import React from 'react'

const About = () => {
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
  return (
   <>
    <div className='bg-red-600 text-2xl h-50 flex items-center justify-center'>
        About
    </div>
   </>
  )
}

export default About