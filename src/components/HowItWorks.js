import React from 'react';

function HowItWorks() {
  const steps = [
    { number: 1, title: 'Login or Sign Up' },
    { number: 2, title: 'Enter pickup and delivery details' },
    { number: 3, title: 'Choose a delivery option' },
    { number: 4, title: 'Track your shipment in real-time' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-gray-600 mb-8">
              Seamless and Simple Delivery, Every Step of the Way
            </p>
            <img
              src="/pic_1.jpg"
              alt="Delivery Person"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200" style={{marginTop: '5rem' }}>
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="flex items-center space-x-4 py-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#c8d4e8] border-2 border-[#a0b4d1] rounded-full flex items-center justify-center relative z-10">
                      <span className="text-lg font-bold text-gray-800">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200">
                      <div className="absolute inset-0 border-l-2 border-dashed border-gray-400"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
