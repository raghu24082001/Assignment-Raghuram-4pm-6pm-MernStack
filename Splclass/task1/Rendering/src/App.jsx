import React from 'react'

const App = () => {

  const Name = 'raghuram'
  const Age = 24
  const city = 'chennai'

  const obj = {
    name: 'Raghu',
    email: 'raghu@248gmail.com',
    phone: 9080875757
  }

  const Array1 = ['Apple', 'Mango', 'banana', 'guava']

  const obj1 = [
    {
      name: 'Raghu',
      email: 'raghu@248gmail.com',
      phone: 9080875757
    },
    {
      name: 'Ram',
      email: 'ram@248gmail.com',
      phone: 5555445757
    }
  ]

  const users = [
    {
      name: "John",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Raghu",
      skills: ["React", "Node", "MongoDB"]
    }
  ]

  const isLoggedIn = true
  const age = 17
  const isAdmin = true

  const user = {
    address: {
      city: "Chennai"
    }
  }

  const username = null

  return (
    <>
      <div>
        <h3>Variable Rendering Task</h3>
        <p>My name is {Name}</p>
        <p>Age is {Age}</p>
        <p>I am from {city}</p>
      </div>

      <div>
        <h3>Object Rendering Task</h3>
        <p>My name is {obj.name}</p>
        <p>Email is {obj.email}</p>
        <p>Mobile number is {obj.phone}</p>
      </div>

      <div>
        <h3>Array Rendering Task</h3>
        <ul>
          {Array1.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Array of Objects Rendering Task</h3>
        {obj1.map((e, i) => (
          <div key={i}>
            <p>My name is {e.name}</p>
            <p>Email is {e.email}</p>
            <p>Mobile number is {e.phone}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>Nested Array Rendering</h3>
        {users.map((user, index) => (
          <div key={index}>
            <h4>{user.name}</h4>
            <ul>
              {user.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3>Conditional Rendering</h3>
        {isLoggedIn ? <p>Welcome User</p> : <p>Please Login</p>}
      </div>

      <div>
        <h3>Ternary Operator</h3>
        <p>{age >= 18 ? "Adult" : "Minor"}</p>
      </div>

      <div>
        <h3>Logical AND Rendering</h3>
        {isAdmin && <p>Admin Dashboard</p>}
      </div>

      <div>
        <h3>Optional Chaining</h3>
        <p>City: {user?.address?.city}</p>
      </div>

      <div>
        <h3>Nullish Coalescing</h3>
        <p>{username ?? "Guest User"}</p>
      </div>
    </>
  )
}

export default App