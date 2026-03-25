import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const res = await fetch('https://dummyjson.com/recipes?limit=5')
      const json = await res.json()
      setData(json.recipes)
    }
    getdata()
  }, [])

  return (
    <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {data.map((e) => (
        <div key={e.id} className='p-4 flex flex-col bg-blue-200 rounded-xl shadow-md'>
          <p className='font-bold text-lg mb-2'>{e.name}</p>

          <ol className='list-decimal pl-5'>
            {e.ingredients.map((v, index) => (
              <li key={index}>{v}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  )
}

export default App