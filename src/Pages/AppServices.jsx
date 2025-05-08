import React from 'react';
import { FaSearch, FaShieldAlt, FaStar } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaSearch className="text-4xl text-white" />,
    title: "Smart App Discovery",
    description: "Find apps effortlessly using trending tags, AI-powered recommendations, and smart filtering.",
    bgColor: "from-indigo-500 to-purple-600"
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-4xl text-white" />,
    title: "Secure Downloads",
    description: "All apps are verified for safety. Experience peace of mind with every download.",
    bgColor: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    icon: <FaStar className="text-4xl text-white" />,
    title: "Authentic Reviews",
    description: "Read real user reviews and make informed choices with transparent ratings.",
    bgColor: "from-yellow-400 to-amber-500"
  }
];

const AppServices = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 pb-16">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-800 drop-shadow-sm">Why Choose Our AppStore?</h2>
        <p className="text-lg text-gray-600 mt-3">
          Discover powerful features that make finding and managing apps a delight.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {services.map(service => (
          <div
            key={service.id}
            className={`rounded-2xl p-6 shadow-xl bg-gradient-to-br ${service.bgColor} transform hover:-translate-y-2 transition duration-300`}
          >
            <div className="mb-4 bg-white/20 p-4 rounded-full w-fit">
              {service.icon}
            </div>
            <h3 className="text-white text-2xl font-semibold">{service.title}</h3>
            <p className="text-white/90 mt-2 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppServices;
