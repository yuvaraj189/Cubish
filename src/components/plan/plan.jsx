// src/components/Plans/Plans.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const plansData = {
  motorInsurance: [
    { id: 1, name: 'Bike Insurance', price: 5000, description: 'Comprehensive coverage for your bike.' },
    { id: 2, name: 'Car Insurance', price: 10000, description: 'Protect your car against damage and theft.' },
    { id: 3, name: 'Auto Rickshaw Insurance', price: 8000, description: 'Affordable plans for auto rickshaws.' },
    { id: 4, name: 'Commercial Vehicle Insurance', price: 12000, description: 'Secure your commercial vehicles.' },
  ],
  travelInsurance: [
    { id: 5, name: 'International Travel Insurance', price: 7000, description: 'Stay covered during your travels abroad.' },
    { id: 6, name: 'Student Travel Insurance', price: 3000, description: 'Special plans for students studying abroad.' },
    { id: 7, name: 'Senior Citizen Travel Insurance', price: 5000, description: 'Tailored for our senior travelers.' },
    { id: 8, name: 'Domestic Travel Insurance', price: 2000, description: 'Affordable plans for local trips.' },
  ],
  healthInsurance: [
    { id: 9, name: 'MediCare', price: 15000, description: 'Comprehensive health coverage for all.' },
    { id: 10, name: 'MediCare Plus', price: 25000, description: 'Enhanced health coverage for added security.' },
    { id: 11, name: 'ElderCare', price: 10000, description: 'Affordable plans for senior citizens.' },
    { id: 12, name: 'Video Assistance', price: 8000, description: 'Get expert video consultations anytime.' },
  ],
};

const Plans = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Explore Our Insurance Plans</h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        Choose from a variety of comprehensive insurance plans tailored to meet your needs.
      </p>

      <div className="space-y-12">
        {/* Motor Insurance Section */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Motor Insurance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plansData.motorInsurance.map((plan) => (
              <div
                key={plan.id}
                className="p-6 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md rounded-lg text-center hover:shadow-lg transition"
              >
                <h4 className="text-xl font-bold text-blue-600">{plan.name}</h4>
                <p className="text-md text-gray-700 my-4">{plan.description}</p>
                <p className="text-lg font-semibold text-gray-800">Price: ₹{plan.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Insurance Section */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Travel Insurance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plansData.travelInsurance.map((plan) => (
              <div
                key={plan.id}
                className="p-6 bg-gradient-to-r from-yellow-100 to-yellow-50 shadow-md rounded-lg text-center hover:shadow-lg transition"
              >
                <h4 className="text-xl font-bold text-yellow-600">{plan.name}</h4>
                <p className="text-md text-gray-700 my-4">{plan.description}</p>
                <p className="text-lg font-semibold text-gray-800">Price: ₹{plan.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Health Insurance Section */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Health Insurance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plansData.healthInsurance.map((plan) => (
              <div
                key={plan.id}
                className="p-6 bg-gradient-to-r from-green-100 to-green-50 shadow-md rounded-lg text-center hover:shadow-lg transition"
              >
                <h4 className="text-xl font-bold text-green-600">{plan.name}</h4>
                <p className="text-md text-gray-700 my-4">{plan.description}</p>
                <p className="text-lg font-semibold text-gray-800">Price: ₹{plan.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
