import React from "react";

// components

// layout for page

import Admin from "layouts/Admin.js";

export default function Maps() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.7682034665049!2d115.22099242918615!3d-8.779220199605895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2430f90b179ad%3A0x32ad9fb840ebed15!2sYayasan%20Oetie%20Hermawan!5e0!3m2!1sen!2sid!4v1623366813475!5m2!1sen!2sid"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="google-maps"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

Maps.layout = Admin;
