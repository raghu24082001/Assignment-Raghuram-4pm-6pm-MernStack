import { useState } from "react"

const Taskstate = () => {
  const [count, setCount] = useState(0)

  const handleChange = () => {
    setCount(count + 1)
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Count: {count}</h1>
      <button 
        onClick={handleChange}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Click me
      </button>
    </div>
  )
}

export default Taskstate

// What is useState in React? Why do we use it?

// useState is a react hook that allows functional component to acess state and state update function in a same method.
// Using this hook functional component can store and manage data that can change over the time. 
// If that data is changed react automatically re-render the component and update the ui


// What happens if you update state directly without using setter function?

// If we dont use setState and directly upadate the state(variable) directly it will not re-render and update the ui



// Write a small example to store and update a counter using useState.