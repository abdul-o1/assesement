import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <AppDownload />
      <Footer />
    </>
  );
}

export default Home;
