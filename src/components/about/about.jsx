import React from 'react';
import Background from '../../assets/images/bg.jpg';
const About = () => {
  return (
    <div className=" py-16 px-6">

      {/* Mission and Values Section */}
      <section id="mission-values" className="mb-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8 animate__animated animate__fadeInUp">Our Mission and Values</h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8 animate__animated animate__fadeInUp animate__delay-200">
          Our mission is to provide high-quality insurance plans that offer peace of mind and security to our customers. We believe in integrity, trust, and customer satisfaction at the core of everything we do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Innovation', 'Integrity', 'Customer Focus'].map((value, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl hover:translate-y-2 hover:opacity-90">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">{value}</h3>
              <p className="text-gray-600 mb-4">
                {value === 'Innovation'
                  ? 'We constantly evolve our offerings to meet the needs of a changing world, ensuring innovative solutions for our customers.'
                  : value === 'Integrity'
                  ? 'We operate with transparency, always prioritizing our customers\' needs and ensuring the highest ethical standards in all our dealings.'
                  : 'Our customers are at the heart of everything we do, and we are committed to providing exceptional service and support every step of the way.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Stories Section */}
      <section id="customer-stories" className="mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8 animate__animated animate__fadeInUp">Customer Stories</h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8 animate__animated animate__fadeInUp animate__delay-200">
          Hear directly from our satisfied customers about how our plans have helped them achieve peace of mind and security during their journeys and in life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {['Sarah', 'Tom', 'Emily', 'John'].map((name, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl hover:translate-y-2 hover:opacity-90">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{`${name}'s Story`}</h3>
              <p className="text-gray-600 mb-4">
                {name === 'Sarah'
                  ? '"I had never purchased travel insurance before, but after getting coverage from this company, I felt so much safer knowing I was protected during my trip."'
                  : name === 'Tom'
                  ? '"As a business owner, knowing my commercial vehicle insurance covers any damages and liabilities gives me peace of mind to focus on running my business."'
                  : name === 'Emily'
                  ? '"Having a family health insurance plan that covers all of us has truly been a blessing. We feel secure knowing we’re in good hands if anything happens."'
                  : '"I am so thankful for the senior citizen health plan. It’s helped me access necessary treatments and covered all my medical expenses efficiently."'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Goals Section */}
      <section id="future-goals" className="mb-16">
        <h2 className="text-4xl font-bold text-center text-red-700 mb-8 animate__animated animate__fadeInUp">Our Future Goals</h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8 animate__animated animate__fadeInUp animate__delay-200">
          We’re committed to growing and expanding our services, improving our plans, and providing even more comprehensive coverage to our customers. Here's what we have in store.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {['Expansion of Services', 'Technology Integration', 'Global Expansion', 'Customer-Centric Initiatives'].map((goal, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl hover:translate-y-2 hover:opacity-90">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">{goal}</h3>
              <p className="text-gray-600 mb-4">
                {goal === 'Expansion of Services'
                  ? 'We are actively working on adding more insurance options, including niche coverages, to meet diverse customer needs and provide even more protection.'
                  : goal === 'Technology Integration'
                  ? 'We are integrating cutting-edge technology into our systems to improve user experience, streamline claims processing, and offer personalized services.'
                  : goal === 'Global Expansion'
                  ? 'Our goal is to expand our presence globally, offering insurance solutions to clients around the world with local expertise and global coverage.'
                  : 'We plan to introduce customer loyalty programs and offer special discounts to reward our long-term clients and enhance the overall customer experience.'}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
