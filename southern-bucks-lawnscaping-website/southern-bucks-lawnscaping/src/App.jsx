import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import './App.css';

const ServicesPage = () => (
  <div className="pt-16">
    <SEOHead 
      title="Professional Lawn Care Services in Walker, LA | Southern Bucks Lawnscaping"
      description="Comprehensive lawn care and landscaping services including mowing, trimming, mulching, hardscaping, and more in Walker, LA and surrounding areas."
      keywords="lawn care services Walker LA, professional mowing, shrub trimming, mulching, hardscaping, landscaping services"
    />
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <ServicesSection />
      </div>
    </div>
  </div>
);

const PortfolioPage = () => (
  <div className="pt-16">
    <SEOHead 
      title="Landscaping Portfolio | Southern Bucks Lawnscaping Walker, LA"
      description="View our completed landscaping and lawn care projects in Walker, Denham Springs, Port Vincent, and Livingston, LA. Quality work guaranteed."
      keywords="landscaping portfolio Walker LA, completed projects, before after landscaping, lawn care gallery"
    />
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
        <GallerySection />
      </div>
    </div>
  </div>
);

const TestimonialsPage = () => (
  <div className="pt-16">
    <SEOHead 
      title="Customer Reviews & Testimonials | Southern Bucks Lawnscaping"
      description="Read what our satisfied customers in Walker, LA and surrounding areas say about our professional lawn care and landscaping services."
      keywords="lawn care reviews Walker LA, landscaping testimonials, customer reviews, satisfied customers"
    />
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Customer Testimonials</h1>
        <TestimonialsSection />
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-16">
    <SEOHead 
      title="Contact Us for Free Quote | Southern Bucks Lawnscaping Walker, LA"
      description="Get your free lawn care and landscaping quote today. Call 225-369-4434 or email SBL@southernbucklawn.com. Serving Walker, LA and surrounding areas."
      keywords="free lawn care quote Walker LA, contact landscaping company, 225-369-4434, SBL@southernbucklawn.com"
    />
    <div className="min-h-screen bg-gray-900 text-white">
      <QuoteSection />
    </div>
  </div>
);

const ServiceAreasPage = () => (
  <div className="pt-16">
    <SEOHead 
      title="Service Areas | Lawn Care Walker, Denham Springs, Port Vincent, Livingston LA"
      description="Southern Bucks Lawnscaping serves Walker, Denham Springs, Port Vincent, Livingston, and surrounding Louisiana areas with professional lawn care services."
      keywords="lawn care Walker LA, landscaping Denham Springs LA, lawn service Port Vincent LA, landscaping Livingston LA"
    />
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Service Areas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#ff6600] mb-4">Walker, LA</h2>
            <p className="text-gray-300">Our home base, providing comprehensive lawn care and landscaping services.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#ff6600] mb-4">Denham Springs, LA</h2>
            <p className="text-gray-300">Professional landscaping and maintenance services for Denham Springs residents.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#ff6600] mb-4">Port Vincent, LA</h2>
            <p className="text-gray-300">Quality lawn care and landscape design services in Port Vincent.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#ff6600] mb-4">Livingston, LA</h2>
            <p className="text-gray-300">Expert landscaping and hardscaping services for Livingston area.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HomePage = () => (
  <>
    <SEOHead />
    <HeroSection />
    <ServicesSection />
    <WhyChooseUsSection />
    <GallerySection />
    <TestimonialsSection />
    <QuoteSection />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App dark">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/service-areas/:area" element={<ServiceAreasPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

