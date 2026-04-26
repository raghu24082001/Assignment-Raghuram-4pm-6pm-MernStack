import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);
  const [show, setShow] = useState(true);
  const [skills, setSkills] = useState(["HTML", "CSS"]);
  const [user, setUser] = useState({ name: "John", age: 20 });

  return (
    <div style={{ padding: "20px" }}>
      
      <h2>Counter (Prev State)</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>

      <hr />

      <h2>Increase Twice</h2>
      <h3>{doubleCount}</h3>
      <button onClick={() => {
        setDoubleCount(prev => prev + 1);
        setDoubleCount(prev => prev + 1);
      }}>
        Increase Twice
      </button>

      <hr />

      <h2>Toggle Show / Hide</h2>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>This text is visible</p>}

      <hr />

      <h2>Skills Array</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button onClick={() => setSkills(prev => [...prev, "React"])}>
        Add Skill
      </button>

      <hr />

      <h2>User Object</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => 
        setUser(prev => ({ ...prev, age: prev.age + 1 }))
      }>
        Increase Age
      </button>

    </div>
  );
}