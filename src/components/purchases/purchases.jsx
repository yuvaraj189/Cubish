import React from "react";
import { useLocation } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon

const Purchases = () => {
  const location = useLocation();
  const { plan, price, validity, customerName, customerEmail, customerDOB, customerPhone, customerAddress } = location.state || {};

  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full transform transition-all duration-500 hover:scale-105">
        <div className="flex items-center justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl mr-4" />
          <h1 className="text-4xl font-bold text-center text-green-600">Purchase Successful!</h1>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Plan Details</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p><strong>Plan Name:</strong> <span className="text-purple-600">{plan}</span></p>
            <p><strong>Price:</strong> <span className="text-green-600">{price}</span></p>
            <p><strong>Validity Period:</strong> <span className="text-orange-600">{validity}</span></p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Information</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p><strong>Name:</strong> {customerName}</p>
            <p><strong>Email:</strong> {customerEmail}</p>
            <p><strong>DOB:</strong> {customerDOB}</p>
            <p><strong>Phone:</strong> {customerPhone}</p>
            <p><strong>Address:</strong> {customerAddress}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300">
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Purchases;
