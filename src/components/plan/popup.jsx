import React, { useState } from 'react';

const Plans = () => {
  // State to control the visibility of the popup and selected plan
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    paymentMethod: ""
  });

  // Function to open the popup with specific plan details
  const handleGetYoursClick = (plan) => {
    setSelectedPlan(plan);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPlan("");
    setUserDetails({
      name: "",
      email: "",
      paymentMethod: ""
    });
  };

  // Function to handle user input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle purchase
  const handlePurchase = () => {
    // Logic to handle the purchase (e.g., form submission or API call)
    alert(`Purchase for ${selectedPlan} completed!`);
    closePopup();
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Travel Insurance Plans</h2>
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Explore the world with peace of mind. Our Travel Insurance options offer comprehensive protection for all kinds of journeys, from international adventures to domestic getaways.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {["International Travel Insurance", "Student Travel Insurance", "Senior Citizen Travel Insurance", "Corporate Travel Insurance"].map((plan, index) => (
          <div className="bg-teal-100 shadow-lg rounded-lg p-8 transition-transform hover:scale-105 hover:bg-teal-200" key={index}>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">{plan}</h3>
            <p className="text-gray-700 mb-6">
              {index === 0 && "Protect yourself while traveling abroad. Our international plans cover unexpected medical expenses, trip cancellations, lost luggage, and more."}
              {index === 1 && "Tailored for students studying abroad, our student travel plans cover medical emergencies, trip interruptions, and essential travel support."}
              {index === 2 && "Specialized travel insurance for seniors, offering enhanced medical support, travel assistance, and peace of mind for safe and enjoyable travels."}
              {index === 3 && "Ideal for business travelers, this plan provides coverage for medical emergencies, lost baggage, and trip cancellations to ensure smooth business trips."}
            </p>
            <button
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300"
              onClick={() => handleGetYoursClick(plan)}
            >
              Get Yours
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Purchase {selectedPlan}</h3>

            {/* Displaying the form to collect user details */}
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-left text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-left text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="paymentMethod" className="block text-left text-gray-700">Payment Method</label>
                <input
                  type="text"
                  id="paymentMethod"
                  name="paymentMethod"
                  value={userDetails.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                  onClick={handlePurchase}
                >
                  Continue Purchase
                </button>
              </div>
            </form>

            {/* Close button */}
            <button
              className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300 mt-4"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Plans;
