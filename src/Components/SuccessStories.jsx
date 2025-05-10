import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import story1 from "../assets/story1.png";
import story2 from "../assets/story2.png";
import story3 from "../assets/story3.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SuccessStoriesCarousel = () => {
  const stories = [
    {
      id: 1,
      title: "Memphis’ Story",
      description:
        "Memphis had chronic kidney disease due to a problem with his remaining kidney. His journey was filled with courage, determination, and support from the community. His journey was filled with courage, determination, and support from the community",
      image: story1,
    },
    {
      id: 2,
      title: "Robyn’s Story",
      description:
        "Robyn never imagined an Instagram scroll would change lives. After discovering a donation request, she took action and became a living donor, inspiring many others.",
      image: story2,
    },
    {
      id: 3,
      title: "Maureen’s Story",
      description:
        "Finding out I had PKD came as a shock. With treatment and support, I found strength and shared my journey to help raise awareness for kidney diseases.",
      image: story3,
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-purple-900 p-2 rounded-full shadow-md hover:bg-purple-200 transition md:block"
      aria-label="Previous"
    >
     <ChevronLeft className="text-white w-5 h-5" />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-purple-900 p-2 rounded-full shadow-md hover:bg-purple-200 transition  md:block"
      aria-label="Next"
    >
     <ChevronRight className="text-white w-5 h-5" />
    </button>
  );

  return (
    <section className="py-10 relative ">
       <div className="absolute top-0 left-1/2 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-60 right-2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-4xl text-center font-bold text-purple-900 mb-8">
          Community Stories
        </h3>

        <div className="relative max-w-full">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={false}
            showDots={true}
            itemClass="px-2"
            containerClass="pb-12"
            dotListClass="!mt-6 flex justify-center items-center"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {stories.map((story) => {
              const isExpanded = expandedCard === story.id;
              return (
                <div
                  key={story.id}
                  className="bg-white w-[280px] mx-auto rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-auto flex flex-col"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-100 object-cover"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {story.title}
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      className={`text-black text-sm mb-2 overflow-hidden ${
                        isExpanded ? "" : "line-clamp-4"
                      }`}
                    >
                      {story.description}
                    </p>
                    <button
                      onClick={() => toggleReadMore(story.id)}
                      className="text-purple-900 text-sm mt-auto hover:underline"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;
