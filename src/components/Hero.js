import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="/hero_pic.jpg"
          alt="Delivery Hero"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Fast, Reliable, and Secure Delivery Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            From parcels to packages, we deliver everything – anywhere, anytime.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-[#3B5998] text-white font-medium rounded hover:bg-opacity-90 transition">
              Book a Delivery
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded hover:bg-white hover:text-gray-900 transition">
              Become a Courier
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
