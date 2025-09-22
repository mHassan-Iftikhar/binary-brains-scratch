"use client";

import React from "react";

const Contact = () => {
  return (
    <div className="relative h-screen bg-[#000101] min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative flex h-screen min-h-[70vh] flex-col justify-center p-8 text-white gap-4">
        <h1 className="text-white text-4xl font-bold">Contact</h1>
        <p className="text-white text-2xl font-bold">Contact us for any questions or inquiries.</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="text-white text-2xl font-bold" />
          <input type="email" placeholder="Email" className="text-white text-2xl font-bold" />
          <input type="tel" placeholder="Phone" className="text-white text-2xl font-bold" />
          <textarea placeholder="Message" className="text-white text-2xl font-bold" />
          <button type="submit" className="text-white text-2xl font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;