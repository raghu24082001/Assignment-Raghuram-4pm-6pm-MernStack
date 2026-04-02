// What is useEffect and why is it used?

// useEffect is a react hook used to handle side effects in functional component.
// We need api calls, timers, localstorage in our Component. React use useEffect to safely handle them after rendering

// What is the difference between dependency array?

// without dependency array:

// useEffect(() => {});
// Runs on every render initial render, state update, re-render

// empty dependency array:

// useEffect(() => {}, [])
// Runs only once in initial render. Do not run after that.

// with dependency array:

// useEffect(() => {}, [value])
// Runs when the given value updates. Initial render, when the value updates

// How to call an API using useEffect with async/await?

import { useEffect, useState } from "react";

const Taskeffect = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/users")
      const result = await res.json()
      setData(result.users.slice(0, 5)) // ✅ only 5 users
    }

    fetchData()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">UseEffect:</h1>

      <ul className="space-y-2">
        {data.map((user) => (
          <li 
            key={user.id}
            className="border p-2 rounded"
          >
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Taskeffect