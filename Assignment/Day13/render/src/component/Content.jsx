import React from 'react'

const Content = () => {
      const dataNew = [{name:'Raghuram',
                        age:24,
                        skills:['Mern','React','Node']},
                    {name:'Ravi',
                        age:31,
                        skills:['Docker','python','Node']},
                    {name:'Athi',
                        age:20,
                        skills:['Java','Springboot','Node']}]
      
      const dataIsThere = true 
                       
  return (
    <>
       { dataIsThere ? <div class='p-10 flex gap-20 justify-between'>
        
         {dataNew.map((e,I)=>(
            <div key={I} class='bg-red-300 p-10 rounded ' >
                <p>Name:{e.name}</p>
                <p>Age:{e.age}</p>
                <p>Skills:{e.skills.map((j,k)=>(
                <span key={k}> {j} |</span>
                ))}</p>
            </div> 
         ))}

       </div> : <h3 class='bg-red-300 text-center'>There is no data </h3>}
    </>
  )
}

export default Content