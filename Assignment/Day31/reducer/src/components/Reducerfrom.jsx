import React, { useReducer } from 'react'

const ReducerForm = () => {
  const initial = {
    name: '',
    password: '',
  }

  const reducer = (state, action) => {
    return { ...state, [action.field]: action.value }
  }

  const [state, dispatch] = useReducer(reducer, initial)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      
      <form className="bg-white p-6 rounded shadow-md w-80 flex flex-col gap-3">
        
        <h2 className="text-xl font-semibold text-center">Login Form</h2>

        <input
          type="text"
          placeholder="Enter name"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={state.name}
          onChange={(e) =>
            dispatch({ field: 'name', value: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter password"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={state.password}
          onChange={(e) =>
            dispatch({ field: 'password', value: e.target.value })
          }
        />

        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm">Name: {state.name}</p>
          <p className="text-sm">Password: {state.password}</p>
        </div>
      </form>
    </div>
  )
}

export default ReducerForm