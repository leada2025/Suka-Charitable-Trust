import React from "react";
import { MapPin } from "lucide-react";
import VerticalLabelLine from "./VerticalLine";

const events = [
  {
    date: "14 MAY",
    title: "(VIRTUAL) NKDO Engage: Ask Me Anything – Bring Your Ideas",
    location: "Virtual, via Zoom",
  },
  {
    date: "17 MAY",
    title: "Denver Colfax Marathon",
    location: "Virtual, via Zoom",
  },
  {
    date: "28 MAY",
    title: "One Kidney Club Global – Quarterly Virtual Meetup",
    location: "Virtual, via Zoom",
  },
  {
    date: "29 MAY",
    title: "Donor Games – Super Murph 2025 Open",
    location: "Virtual, via App",
  },
  {
    date: "02 JUN",
    title: "(Virtual) NKF Monthly State Legislation Meeting",
    location: "Virtual, via Zoom",
  },
  {
    date: "04 JUN",
    title: "(Virtual) NKDO Monthly Member Meeting",
    location: "Virtual, via Zoom",
  },
  {
    date: "21 JUN",
    title: "National Living Donor Triathlon",
    location:
      "Snow Family Outdoor Fitness and Wellness Complex, Clemson University",
  },
  {
    date: "02 JUL",
    title: "(Virtual) NKDO Monthly Member Meeting",
    location: "Virtual, via Zoom",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="bg-white py-12 px-4 relative ">
       <div className="absolute top-0 left-0 w-25 h-20 bg-gradient-to-tr from-blue-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
        <div className="absolute top-0 right-0 w-25 h-40 bg-gradient-to-tr from-green-600 to-transparent rounded-bl-full opacity-50 pointer-events-none z-0" />
         <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto flex">
        {/* Left: Vertical Label Line */}
     

        {/* Right: Main Content */}
        <div className="flex-1">
          <h2 className="text-3xl text-purple-900 font-bold text-center mb-10">
            UPCOMING EVENTS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="border border-black rounded-md p-4 transition hover:shadow-lg hover:border-blue-600 hover:text-white hover:bg-black hover:ring-blue-100 active:bg-black active:text-white"

                data-aos="zoom-in-up"
              >
                <div className="bg-gray-100 text-center py-2 rounded mb-2">
                  <span className="text-lg font-bold text-black">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-sm font-semibold mb-1">{event.title}</h3>
                <div className="flex items-start text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1 mt-0.5" />
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="border border-black px-6 py-2 rounded-full hover:bg-purple-900 hover:text-white transition active:bg-purple-900 active:text-white">
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
