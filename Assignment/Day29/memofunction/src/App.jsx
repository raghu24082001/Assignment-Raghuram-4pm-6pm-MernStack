import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState("")
  const [show, setShow] = useState('')
  const [num, setNum] = useState(0)
  const [mute, setMute] = useState('')

  const handleSubmit = () => {
    const data1 = Number(value)
    let data2 = 0

    for (let i = 0; i <= data1; i++) {
      data2 += i
    }

    setShow(data2)
  }

  const generatearray = () => {
    let arr = []
    for (let i = 0; i <= num; i++) {
      arr.push(i)
    }
    const data1 = arr.filter((item) => item % 2 === 0)
    const data2 = data1.reduce((acc, curr) => acc + curr, 0)
    setMute(data2)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8 p-4">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
        <h1 className="text-xl font-bold mb-4">Sum Calculator</h1>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Calculate Sum
        </button>

        <p className="mt-4 text-lg font-semibold text-gray-700">
          {show !== '' && `Result: ${show}`}
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
        <h1 className="text-xl font-bold mb-4">Even Number Sum</h1>

        <input
          type="text"
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter a number"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={generatearray}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Generate & Sum
        </button>

        <p className="mt-4 text-lg font-semibold text-gray-700">
          {mute !== '' && `Even Sum: ${mute}`}
        </p>
      </div>
    </div>
  )
}

export default App
