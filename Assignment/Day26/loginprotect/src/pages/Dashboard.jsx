import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex items-center justify-center mt-20">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome 👋
          </h1>
          <p className="text-gray-600">
            You have successfully logged in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;