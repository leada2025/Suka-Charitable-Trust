import React from "react";

const Careers = () => {
  window.scroll(0, 0);

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 relative">
        <br />
      {/* Gradient Background Decorations */}
      <div className="absolute top-50 left-50 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-50 right-50 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-50 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-50 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
          Careers at SUKA Charitable Trust
        </h1>
        <p className="text-lg text-black mb-12 text-center max-w-3xl mx-auto">
          Join a mission-driven team dedicated to supporting kidney health and making a lasting impact on communities across India.
        </p>

        {/* Why Work With Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🌟 Why Work With Us</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Make a meaningful difference in healthcare and patient lives.</li>
            <li>Be part of innovative health education and outreach programs.</li>
            <li>Collaborate with passionate volunteers, professionals, and partners.</li>
            <li>Enjoy a respectful, inclusive, and growth-oriented environment.</li>
          </ul>
        </section>

        {/* Open Positions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">💼 Current Openings</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Community Outreach Coordinator:</strong> Engage communities and build trust.</li>
            <li><strong>Health Camp Organizer:</strong> Coordinate logistics for screening camps.</li>
            <li><strong>Volunteer Coordinator:</strong> Manage and train our volunteer base.</li>
            <li><strong>Digital Marketing Assistant:</strong> Help spread awareness and engagement online.</li>
            <li><strong>Patient Counselor:</strong> Offer emotional and logistical support to kidney patients.</li>
          </ul>
          <p className="mt-4">
            If you’re passionate about health equity and want to contribute your skills, we’d love to hear from you.{" "}
            <a href="/contact" className="text-blue-700 underline">Contact us</a> or email your resume to <a href="mailto:careers@sukacharity.org" className="text-blue-700 underline">careers@sukacharity.org</a>.
          </p>
        </section>

        {/* Internship Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🎓 Internships</h2>
          <p className="mb-3">
            We welcome students and recent graduates looking to gain hands-on experience in nonprofit work. Internship opportunities are available in:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Health Communications</li>
            <li>Community Engagement</li>
            <li>Nonprofit Administration</li>
            <li>Event Planning</li>
            <li>Graphic Design and Social Media</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-10 text-purple-900">
          📢 <strong>We’re Hiring – Join Us in Saving Lives!</strong><br />
          Whether full-time, part-time, or as an intern, your contribution matters.{" "}
          <a href="/contact" className="text-blue-600 underline">Reach out to start your journey</a>.
        </div>
      </div>
    </section>
  );
};

export default Careers;
