// What is useRef and how is it different from useState?

// useRef is a react hook used to store a mutable values that presist across renders without causing re-render.
// Unlike state updating a ref do not trigger the component to re-render
// It is mainly used to directly access dom ElementInternals, store previous values.

// How to focus an input field using useRef?

import { useRef } from 'react'

const Taskref = () => {
  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">UseRef:</h1>

      <input
        ref={inputRef}
        className="border px-3 py-2 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <button
        onClick={handleFocus}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Focus
      </button>
    </div>
  )
}

export default Taskref