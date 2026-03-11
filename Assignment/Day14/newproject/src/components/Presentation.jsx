import React from "react";

const Presentation = ({ users, products, students, developer, employee }) => {
  return (
    <div className="space-y-6">

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">User List</h2>
        {users.map((user) => (
          <div key={user.id} className="text-sm">
            <p>{user.name} - {user.age}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Products</h2>
        {products.map((product) => (
          <div key={product.id} className="text-sm">
            <p>{product.productname} - ₹{product.price}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Student Results</h2>
        {students.map((student, index) => {
          const result = student.marks >= 40 ? "Pass" : "Fail";
          return (
            <div key={index} className="text-sm">
              <p>{student.name} - {student.marks} - {result}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Developer Skills</h2>
        <p className="text-sm mb-1">{developer.name}</p>
        <ul className="list-disc ml-5 text-sm">
          {developer.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Employee Profile</h2>
        <p className="text-sm">{employee.name}</p>
        <p className="text-sm">{employee.role}</p>
        <p className="text-sm">{employee.location}</p>
      </div>

    </div>
  );
};

export default Presentation;