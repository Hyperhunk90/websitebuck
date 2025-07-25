import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Walker, LA",
      rating: 5,
      text: "Shane and his team transformed our backyard into a beautiful oasis. The attention to detail and professionalism was outstanding. They truly treat your yard like it's their own!",
      service: "Complete Landscape Design"
    },
    {
      name: "Mike Rodriguez",
      location: "Denham Springs, LA",
      rating: 5,
      text: "Best lawn care service in the area! Shane's experience really shows in the quality of work. Our lawn has never looked better, and the weekly maintenance is always reliable.",
      service: "Weekly Lawn Maintenance"
    },
    {
      name: "Jennifer Davis",
      location: "Port Vincent, LA",
      rating: 5,
      text: "The retaining wall and hardscape work exceeded our expectations. Shane's 13 years of experience and new equipment made all the difference. Highly recommend!",
      service: "Hardscaping & Retaining Walls"
    },
    {
      name: "Robert Thompson",
      location: "Livingston, LA",
      rating: 5,
      text: "Professional, reliable, and passionate about their work. Shane's dedication to quality is evident in every project. Our commercial property looks amazing year-round.",
      service: "Commercial Maintenance"
    },
    {
      name: "Lisa Martinez",
      location: "Walker, LA",
      rating: 5,
      text: "From the initial consultation to project completion, Southern Bucks Lawnscaping delivered exceptional service. The 3D design helped us visualize our dream landscape perfectly.",
      service: "Landscape Design & Installation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our <span className="text-[#32cd32]">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            throughout Walker, LA and surrounding areas have to say about our services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 md:p-12 border border-gray-700">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-[#ff6600] fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Customer Info */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-1">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-gray-400 mb-2">
                {testimonials[currentTestimonial].location}
              </p>
              <p className="text-[#32cd32] font-medium">
                {testimonials[currentTestimonial].service}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#ff6600] text-white p-3 rounded-full hover:bg-[#e55a00] transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-[#ff6600] text-white p-3 rounded-full hover:bg-[#e55a00] transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#ff6600]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Ready to join our satisfied customers?
          </p>
          <a
            href="#quote"
            className="btn-primary text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

