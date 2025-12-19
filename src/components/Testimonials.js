import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      author: "Morem ipsum dolor",
    },
    {
      text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      author: "Morem ipsum dolor",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customer Says
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Qorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="relative">
          <div className="flex items-center justify-center space-x-8">
            <button className="text-4xl text-gray-400 hover:text-gray-600">
              <img src="/inverted_1.png" alt="Previous" className="h-12" />
            </button>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <p className="text-sm text-gray-600 mb-4 italic">
                    {testimonial.text}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
            <button className="text-4xl text-gray-400 hover:text-gray-600">
              <img src="/inverted.png" alt="Next" className="h-12" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
