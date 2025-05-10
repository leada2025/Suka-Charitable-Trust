import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import news1 from "../assets/kidneynews1.jpg";
import news2 from "../assets/kidneynews2.jpg";
import news3 from "../assets/kidneynews3.jpg";

// News data
const newsData = [
  {
    id: 1,
    title: "SUKA Launches Kidney Awareness Drive",
    description:
      "Cooking For Your Kidney Health: Nutrition Information For the Kidney Diet. Knowledge is power! A great resource for people with chronic kidney disease or transplant.",
    image: news1,
    link: "/news/kidney-awareness-drive",
  },
  {
    id: 2,
    title: "Free Screening Camps Impact Lives",
    description:
      "Home dialysis and peritoneal treatment featured in our new awareness session with Rachel Cluthe and Kristin Rice.",
    image: news2,
    link: "/news/screening-camps",
  },
  {
    id: 3,
    title: "SUKA Partners with Local Hospitals",
    description:
      "Support groups and activities make a difference. One friend at the right time can change everything.",
    image: news3,
    link: "/news/hospital-partnerships",
  },
];

// Carousel breakpoints
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

// Custom dot
const CustomDot = ({ onClick, active }) => (
  <button
    onClick={onClick}
    className={`h-2.5 w-2.5 mx-1 rounded-full ${
      active ? "bg-blue-600" : "bg-gray-300"
    }`}
  />
);

const NewsCarousel = () => {
  return (
    <section className="py-16 relative">
      
      <div className="max-w-7xl mx-auto px-4"
      > <div className="absolute bottom-0 right-0 w-25 h-60 bg-gradient-to-br from-green-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-25 h-20 bg-gradient-to-br from-blue-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
         <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
        <h2 className="text-3xl text-purple-900 font-bold text-center mb-12">
          Latest News & Updates
        </h2>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={6000}
          arrows={false}
          showDots
          customDot={<CustomDot />}
          dotListClass="!mt-6 flex justify-center items-center"
          containerClass="pb-12"
        >
          {newsData.map((news) => (
            <div
              key={news.id}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Left Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-[250px] md:h-full object-cover"
                  data-aos="flip-left"
                />
              </div>

              {/* Right Content */}
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-purple-900 mb-4" data-aos="flip-right">
                  {news.title}
                </h3>
                <p className="text-black mb-6" data-aos="flip-right">{news.description}</p>
                <a
                  href={news.link}
                  className="inline-block bg-purple-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  data-aos="flip-right"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default NewsCarousel;
