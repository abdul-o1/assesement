import React from 'react';

function Services() {
  const services = [
    {
      icon: '/Mask group (5).png',
      title: 'Standard Delivery',
      deliveryTime: 'Delivery Time: 2-3 Day',
    },
    {
      icon: '/Mask group (6).png',
      title: 'Express Delivery',
      deliveryTime: 'Delivery Time: 1 Day',
    },
  ];

  return (
   
<section className="bg-[#2B3A67] text-white rounded-2xl overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Rounded dark panel with clipped corners + subtle outer ring */}
    <div className="relative rounded-2xl overflow-hidden bg-[#2B3A67] ">
      {/* Optional gentle spotlight gradient to mimic depth behind cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(1000px 400px at 60% 40%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%)',
        }}
      />

      {/* Content padding inside the panel */}
      <div className="relative p-6 sm:p-8 lg:p-10">
        {/* Two-column layout: left copy + right cards (closer to screenshot) */}
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 lg:gap-12 items-start">
          {/* Left side - Title and description */}
          <div className="md:max-w-xs">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-white/80">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            </p>
          </div>

          {/* Right side - Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 justify-items-center md:justify-items-end">
            {services.map((service, index) => (
              <article
                key={index}
                className="group w-[250px] md:w-[280px] rounded-xl bg-white/5 ring-1 ring-white/20 backdrop-blur-sm
                           p-6 md:p-7 text-center transition
                           hover:bg-white/10 hover:ring-white/30"
              >
                {/* Icon block with soft square + inner ring like screenshot */}
                <div className="mb-5 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-white/10 ring-1 ring-white/20
                                  flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-14 w-14 md:h-16 md:w-16 object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">
                  {service.title}
                </h3>

                {/* Caption */}
                <p className="text-xs md:text-sm text-white/70">
                  {service.deliveryTime}
                </p>
              </article>
                       ))}
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
  );
}

export default Services;
