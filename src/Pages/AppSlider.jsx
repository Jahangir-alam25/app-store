import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
      title: "Brain Training",
      description: "Sharpen your mind with engaging brain training games designed to improve memory, focus, problem-solving skills, and overall cognitive performance daily.",
     
      thumbnail: "https://i.ibb.co.com/n8s1vB7z/Screenshot-20250505-122908.png",
    },
    {
      title: "Fitify Fitness",
      description: "Fitify Fitness helps you achieve your health goals with personalized workout plans, smart tracking, and equipment-free training options.",
    
      thumbnail: "https://i.ibb.co.com/j9tT6NN5/Screenshot-20250505-144326.png  ",
    },
    {
      title: "Grok ",
      description: "Grok AI Assistant is an intelligent, conversational tool designed to provide real-time answers, automate tasks, and boost productivity through natural interactions.",
 
      thumbnail: "https://i.ibb.co.com/nN825FZx/Screenshot-20250505-145639.png",
    }
  ];

const AppSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };

  return (
    <div className="max-w-5xl mx-auto my-6 ">
      <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-[80vh] w-full text-white">
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 flex items-center justify-between h-full">
            {/* Left Text */}
            <div className="w-1/2 space-y-6">
              <h2 className="text-5xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
              <button className="btn bg-blue-600 text-white px-6">Explore App →</button>
            </div>

            {/* Right Thumbnail Cards */}
            <div className="w-1/2 flex justify-end gap-4">
              {slides.map((card, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden border-4 ${
                    i === index ? 'border-blue-600 scale-105' : 'border-transparent'
                  } transition-all duration-300 cursor-pointer w-[150px] h-[220px] shadow-xl`}
                >
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <p className="text-center text-white font-bold bg-black bg-opacity-60 py-1">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default AppSlider;
