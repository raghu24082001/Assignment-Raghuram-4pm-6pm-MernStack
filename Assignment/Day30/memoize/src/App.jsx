import React, { useMemo, useState } from 'react'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [num, setNum] = useState(0)
  const [name, setName] = useState('')

  // Generate numbers and sort in descending order
  const generateNumbers = () => {
    let arr = []
    for (let i = 0; i <= num; i++) {
      arr.push(i)
    }
    return arr.sort((a, b) => b - a)
  }

  // List of names
  const listOfNames = ['sachin', 'saurav', 'virat', 'rohit', 'dhoni']

  // Filter names based on input
  const filterNames = () => {
    return listOfNames.filter((e) =>
      e.includes(name)
    )
  }

  // Memoized values
  const memoizedNumbers = useMemo(() => generateNumbers(), [num])
  const memoizedNames = useMemo(() => filterNames(), [name])

  return (
    <div className="p-4">
      {/* Theme toggle */}
      <div className={toggle ? 'bg-red-300 p-2' : 'bg-yellow-300 p-2'}>
        Hello
      </div>

      <button
        className="border rounded m-2 p-1"
        onClick={() => setToggle(!toggle)}
      >
        Toggle Theme
      </button>

      {/* Number input */}
      <div className="mt-4">
        <input
          type="number"
          placeholder="Enter a number"
          onChange={(e) => setNum(Number(e.target.value))}
          className="border rounded p-1"
        />

        <ul className="mt-2">
          {memoizedNumbers.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>

      {/* Name filter */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search name"
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-1"
        />

        <ul className="mt-2">
          {memoizedNames.length > 0 ? (
            memoizedNames.map((e, i) => <li key={i}>{e}</li>)
          ) : (
            <li>No match found</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App