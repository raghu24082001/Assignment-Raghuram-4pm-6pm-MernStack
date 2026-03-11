import React from "react";
import Presentation from "./Presentation";

const Container = () => {

  const users = [
    { id: 1, name: "Raghu", age: 24 },
    { id: 2, name: "John", age: 27 }
  ];

  const products = [
    { id: 1, productname: "Laptop", price: 60000 },
    { id: 2, productname: "Mobile", price: 20000 }
  ];

  const students = [
    { name: "Arun", marks: 80 },
    { name: "Kumar", marks: 35 }
  ];

  const developer = {
    name: "John",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  };

  const employee = {
    name: "Ravi",
    role: "Frontend Developer",
    location: "Chennai"
  };

  return (
    <Presentation
      users={users}
      products={products}
      students={students}
      developer={developer}
      employee={employee}
    />
  );
};

export default Container;