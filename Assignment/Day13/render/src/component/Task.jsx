import React from "react";

const Hello = () => {
  return (
    <p className="text-green-600 font-semibold">Hello from Hello Component 👋</p>
  );
};

const Task = () => {
  // 2. Rendering Variables
  const name = "Raghu";

  // 7. Conditional Rendering
  const isLoggedIn = true;

  // 8. Ternary Operator
  const age = 24;

  // 9. Logical && Rendering
  const showMessage = true;

  // 11. Nullish Coalescing
  const user = {
    username: null,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl space-y-6">

        <h1 className="text-2xl font-bold text-center text-blue-600">
          React Rendering Examples
        </h1>

        {/* 1. Functional Component Rendering */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold text-gray-700">
            1. Functional Component Rendering
          </h3>
          <Hello />
        </div>

        {/* 2. Rendering Variables */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold text-gray-700">2. Rendering Variables</h3>
          <p className="text-gray-600">Hello {name}</p>
        </div>

        {/* 7. Conditional Rendering */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold text-gray-700">
            7. Conditional Rendering
          </h3>
          {isLoggedIn ? (
            <p className="text-green-600 font-medium">User Logged In</p>
          ) : (
            <p className="text-red-600 font-medium">Please Login</p>
          )}
        </div>

        {/* 8. Ternary Operator */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold text-gray-700">8. Ternary Operator</h3>
          <p className="text-gray-600">
            {age >= 18 ? "Adult" : "Minor"}
          </p>
        </div>

        {/* 9. Logical && Rendering */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold text-gray-700">
            9. Logical && Rendering
          </h3>
          {showMessage && (
            <p className="text-purple-600">This message is visible</p>
          )}
        </div>

        {/* 11. Nullish Coalescing */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold text-gray-700">
            11. Nullish Coalescing
          </h3>
          <p className="text-gray-600">
            Username:{" "}
            <span className="font-semibold text-blue-600">
              {user.username ?? "Guest User"}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Task;