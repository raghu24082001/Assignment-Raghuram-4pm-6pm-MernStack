import React from 'react'
import { Link, NavLink } from 'react-router-dom';

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
    <div className='bg-red-600 text-2xl h-50 flex items-center justify-center gap-20'>
        {datas.map((d)=>(
          <div key={d.id} className='bg-white rounded p-2 '>
                <div>
                  <p>{d.Name}</p>
                <p>{d.subject}</p>
                <Link to={`/param/${d.id}`}>See More</Link>
                </div>
                
          </div>
        ))}
    </div>
   </>
  )
}

export default About