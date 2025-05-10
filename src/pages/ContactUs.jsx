import React from "react";

const ContactUsPage = () => {
  window.scroll(0, 0);

  return (
     <section className="bg-white text-black px-6 md:px-20 py-16 mx-auto relative">
      {/* Heading */} <br />
       <div className="absolute top-0 left-0 w-74 h-100 bg-gradient-to-br from-blue-600 to-transparent rounded-br-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 w-40 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-4  w-74 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
      {/* Bottom-right purple gradient */}
      <div className="absolute bottom-0 right-0 w-20 h-100 bg-gradient-to-tl from-blue-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />
       <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
        <br />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">Contact Us</h1>
        <p className="text-lg text-black max-w-3xl mx-auto">
          Whether you’re a patient, donor, volunteer, or partner, we’re here to connect and support you.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-900">📍 Contact Information</h2>
        <p>Address: SUKA Charitable Trust, 123 Health Avenue, Coimbatore, Tamil Nadu, 641001, India</p>
        <p>Phone: +91 98765 43210</p>
        <p>Email: contact@sukacharity.org</p>
        <p>Website: www.sukacharity.org</p>
        <p>Office Hours: Monday to Saturday: 9:00 AM - 6:00 PM | Sunday: Closed</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">📩 Inquiry Form</h2>
        <form className="space-y-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border rounded-md"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
          <button className="w-full bg-purple-600 hover:bg-purple-900 text-white py-2 rounded-md">
            📌 Submit Now
          </button>
        </form>
      </div>
<br />
      <div>
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">📍 Location Map</h2>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <p>Google Map Embed Here</p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">🌐 Connect with Us</h2>
        <p className="mb-2">Facebook: @SUKACharity</p>
        <p className="mb-2">Instagram: @SUKACharitableTrust</p>
        <p className="mb-2">Twitter: @SUKA_Charity</p>
        <p>YouTube: SUKA Charitable Trust Channel</p>
      </div>
    </section>
  );
};

export default ContactUsPage;
