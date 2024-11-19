import React from 'react';
import Logo from '../../assets/images/landing.png';
import FamilyImage from '../../assets/images/family.png';
import SpouseImage from '../../assets/images/spouse.png'; // Import the Spouse image
import DadImage from '../../assets/images/dad.jpg';
import MumImage from '../../assets/images/mum.jpg';
import SonImage from '../../assets/images/son.jpg';
import DauImage from '../../assets/images/daughter.jpg';
import MuminlawImage from '../../assets/images/muminlaw.jpg';
import FatherinlawImage from '../../assets/images/fatherinlaw.jpg';
import CarInc from '../../assets/images/car.png';
import BikeInc from '../../assets/images/bike.png';
const Home = () => {
  return (
    <div>
      {/* Section 1: Login Page */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-grey relative">
        <img src={Logo} alt="Landing" className="w-1/2 -mt-36 mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mt-5 mb-4">Welcome to Our Platform</h1>
        <p className="text-lg text-gray-600 mb-6">Experience the best with us and explore our services</p>
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md border-2 border-transparent border-blue-500 hover:bg-white hover:border-blue-500 hover:text-blue-500 transition">
          Get Started
        </button>
      
       {/* Section mid : scrool down */}
      <div className="absolute bottom-10 text-center">
          <p className="text-gray-600 text-sm mb-6">Scroll Down</p>
          <div className="animate-bounce mb-14">
            <svg className="w-6 h-6 text-blue-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2: Health Insurance Landing Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-6 py-10 space-y-10 md:space-y-0 md:space-x-10">
        <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2 space-y-4 ml-8">
          <h2 className="text-2xl font-bold text-blue-700">Health Insurance You Can Trust</h2>
          <p className="text-gray-600">Up to ₹75,000 Income Tax# benefits U/S 80D</p>

          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
            <p className="text-gray-500 text-sm font-semibold">Who Would You Like To Insure?</p>
            <p className="text-sm text-blue-600 bg-blue-100 rounded-full px-3 py-1 inline-block mt-2">
              Adding 2 or more members will give you up to 32% off
            </p>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {/* Spouse Button with Image */}
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-500 transition">
                <img src={SpouseImage} alt="Spouse" className="w-12 h-12 mb-2 rounded-full" />
                <p className="text-sm  text-black  border-blue-500 hover:border-blue-500 hover:text-white transition">My One</p>
              </button>
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-500 transition">
                <img src={DadImage} alt="Spouse" className="w-12 h-12 mb-2 rounded-full" />
                <p className="text-sm  text-black  border-blue-500 hover:border-blue-500 hover:text-white transition">My Hero</p>
              </button>
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-500 transition">
                <img src={MumImage} alt="Spouse" className="w-12 h-12 mb-2 rounded-full" />
                <p className="text-sm  text-black  border-blue-500 hover:border-blue-500 hover:text-white transition">My Heroine</p>
              </button>
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-500 transition">
                <img src={SonImage} alt="Spouse" className="w-12 h-12 mb-2 rounded-full" />
                <p className="text-sm  text-black  border-blue-500 hover:border-blue-500 hover:text-white transition">My Champ</p>
              </button>
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-500 transition">
                <img src={DauImage} alt="Spouse" className="w-12 h-12 mb-2 rounded-full" />
                <p className="text-sm  text-black  border-blue-500 hover:border-blue-500 hover:text-white transition">My Gem</p>
              </button>
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-500 transition">
                <img src={MuminlawImage} alt="Spouse" className="w-12 h-12 mb-2 rounded-full" />
                <p className="text-sm  text-black  border-blue-500 hover:border-blue-500 hover:text-white transition">Mom-in-Love</p>
              </button>
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-500 transition">
                <img src={FatherinlawImage} alt="Spouse" className="w-12 h-12 mb-2 rounded-full" />
                <p className="text-sm  text-black  border-blue-500 hover:border-blue-500 hover:text-white transition">Dad-in-Love</p>
              </button>
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <button className="flex-1 py-2 bg-blue-500 text-white font-semibold rounded-md border-2 border-transparent hover:bg-white hover:border-blue-500 hover:text-blue-500 transition">
              Renew 
            </button>
            <button className="flex-1 py-2 bg-blue-500 text-white font-semibold rounded-md border-2 border-transparent hover:bg-white hover:border-blue-500 hover:text-blue-500 transition">
              Get Plan
            </button>
          </div>
        </div>

        {/* Right Side - Illustration and Info Box */}
        <div className="relative md:w-1/2 flex justify-center">
          <img src={FamilyImage} alt="Family Illustration" className="max-w-full h-auto rounded-lg shadow-lg" />
          <div className="absolute bottom-4 right-4 bg-blue-100 text-blue-700 rounded-md shadow-lg px-4 py-2">
            Get Cashless care everywhere
          </div>
        </div>
      </section>
      {/* Contact Form Compont*/}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 py-10 px-4">
  <div className="flex items-center justify-center w-full max-w-7xl">
    {/* Left Image */}
    <div className="w-1/3 mr-52">
      <img src={CarInc} alt="Left Image" className="" />
    </div>

    {/* Contact Form (Moved to the Right) */}
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full">
      <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Get in Touch</h2>
      <p className="text-gray-500 text-center mb-8">
        We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </p>

      <form className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Name as You'd Like to be Called"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-blue-500">
            <i className="fas fa-user"></i>
          </span>
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            placeholder="Your Email, Please"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-blue-500">
            <i className="fas fa-envelope"></i>
          </span>
        </div>

        {/* Phone Field */}
        <div className="relative">
          <input
            type="tel"
            placeholder="Drop Your Mobile Number"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-blue-500">
            <i className="fas fa-phone"></i>
          </span>
        </div>

        {/* Message Field */}
        <div className="relative">
          <textarea
            rows="4"
            placeholder="We’d Love to Hear From You"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
          ></textarea>
          <span className="absolute left-3 top-3 text-blue-500">
            <i className="fas fa-comment"></i>
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3  bg-blue-500 text-white font-semibold rounded-md border-2 border-transparent hover:bg-white hover:border-blue-500 hover:text-blue-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>
<section className="bg-blue-800 text-white py-8">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-center">
      {/* Copyright Section */}
      <div className="text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6">
       
        
        {/* Twitter Button */}
        <a 
          href="https://x.com/yuvaraj_7_" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition duration-200"
        >
          <i className="fab fa-twitter"></i>
        </a>
        
        {/* Instagram Button */}
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition duration-200"
        >
          <i className="fab fa-instagram"></i>
        </a>
        
        {/* LinkedIn Button */}
        <a 
          href="https://www.linkedin.com/in/yuvaraj-kumar-s-8b7728258/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-yellow-700 hover:bg-yellow-800 text-white p-3 rounded-full transition duration-200"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>
</section>



    </div>
  );
};

export default Home;