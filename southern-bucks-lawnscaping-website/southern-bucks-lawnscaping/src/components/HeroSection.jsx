import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="hero-video bg-gradient-to-br from-green-800 to-green-900">
        {/* Placeholder for video - user will replace with actual video */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      </div>
      
      {/* Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Southern Bucks
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32cd32] mb-2">
            Lawnscaping
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 font-medium">
            Professional Lawn Care & Landscaping in Walker, LA
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="space-y-4">
          <a
            href="#quote"
            className="inline-flex items-center btn-primary text-white px-8 py-4 rounded-lg text-lg font-semibold group"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-gray-300 text-sm">
            Call us at <a href="tel:225-369-4434" className="text-[#ff6600] hover:underline font-semibold">225-369-4434</a>
          </p>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-2xl font-bold text-[#ff6600]">13+</h3>
            <p className="text-gray-200">Years Experience</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-2xl font-bold text-[#32cd32]">100%</h3>
            <p className="text-gray-200">New Equipment</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-2xl font-bold text-[#ff6600]">Local</h3>
            <p className="text-gray-200">Walker, LA Based</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

