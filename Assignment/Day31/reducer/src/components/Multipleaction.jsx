import React, { useReducer } from 'react'

const MultipleAction = () => {
  const initial = 0

  const reducer = (state, action) => {
    switch (action.type) {
      case 'Add':
        return state + 1
      case 'Dec':
        return state - 1
      case 'Reset':
        return 0
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initial)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <h1 className="text-2xl font-bold mb-4">Counter</h1>

      <p className="text-3xl font-semibold mb-6">{state}</p>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: 'Add' })}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add
        </button>

        <button
          onClick={() => dispatch({ type: 'Dec' })}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Dec
        </button>

        <button
          onClick={() => dispatch({ type: 'Reset' })}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default MultipleAction