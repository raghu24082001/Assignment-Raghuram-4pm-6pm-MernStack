import React from 'react'
import Tv from '../assets/tv.webp'
import Appliance from '../assets/appliances.webp'
import Home from '../assets/Home.webp'
import Laptop from '../assets/Laptop.webp'
import Utility from '../assets/utility.webp'
import Kitchen from '../assets/kitchen.webp'
import Gadjets from '../assets/gadjets.webp'
import Mobile from '../assets/mobile.webp'



const Corrousel = () => {

const datas = [
  { name:'TV', img: Tv },
  { name:'Appliance', img: Appliance },
  { name:'Home', img: Home },
  { name:'Laptop', img: Laptop },
  { name:'Utility', img: Utility },
  { name:'Kitchen', img: Kitchen },
  { name:'Gadjets', img: Gadjets },
  { name:'Mobile', img: Mobile }
]

return (
  <>
    <div className="flex gap-6 p-5 justify-evenly">
      {datas.map((d,i)=>(
        <div key={i} className="flex flex-col items-center">
          <img 
            src={d.img}  
            className="w-15 h-15 border-2 border-green-500 rounded-full object-cover transition-all duration-300 hover:w-17 hover:h-17"
          />
          <p className="mt-2 text-sm">{d.name}</p>
        </div>
      ))}
    </div>

    
  </>
)
}

export default Corrousel