

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AppSlider = () => {
 
  const slides = [
    {
      id: 1,
      title: "Brain Training",
      description: "Sharpen your mind with engaging brain training games designed to improve memory, focus, problem-solving skills, and overall cognitive performance daily.",
      banner: " https://i.ibb.co.com/Hp7mrj4X/images.jpg",
      thumbnail: "https://i.ibb.co.com/n8s1vB7z/Screenshot-20250505-122908.png",
    },
    {
      id: 2,
      title: "Fitify Fitness",
      description: "Fitify Fitness helps you achieve your health goals with personalized workout plans, smart tracking, and equipment-free training options.",
      banner: "https://i.ibb.co.com/NgcvZqQW/medical1.webp",
      thumbnail: "https://i.ibb.co.com/j9tT6NN5/Screenshot-20250505-144326.png  ",
    },
    {
      id: 3,
      title: "Grok ",
      description: "Grok AI Assistant is an intelligent, conversational tool designed to provide real-time answers, automate tasks, and boost productivity through natural interactions.",
      banner: "https://i.ibb.co.com/SDsSj33Q/IMG-20250507-WA0009.jpg",
      thumbnail: "https://i.ibb.co.com/nN825FZx/Screenshot-20250505-145639.png",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      <div className="flex flex-col sm:flex-row justify-center items-center mb-10 ">
        <input
          className="bg-white w-full lg:w-5/12 sm:w-80 px-4 py-2 rounded-l-2xl border border-gray-300 shadow-sm"
          type="text"
          placeholder="Search apps..."
        />
        <button className="bg-blue-500 text-white text-lg px-10 py-2 rounded-r-2xl hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Discover New & Trending Apps</h2>
        <p className="text-gray-600 mt-2">
          Explore our latest releases and top promotions. Stay ahead with cutting-edge apps curated just for you.
        </p>
      </div>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="p-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white">
              <img src={slide.banner} alt={slide.title} className="w-full h-64 object-cover" />
              
              <div className="p-4">
                
                <p className="text-gray-600 mt-2">{slide.description}</p>
                <div className='flex gap-7 items-center mt-6'>
                <img className=" rounded-2xl border-4 border-yellow-600 w-20 h-20 object-cover " src={slide.thumbnail} alt="" />
                <div className='space-y-2'>
                <h3 className="text-xl font-bold">{slide.title}</h3>
                <button className="bg-blue-500 text-white px-10 py-2 rounded-2xl">Install</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AppSlider;

