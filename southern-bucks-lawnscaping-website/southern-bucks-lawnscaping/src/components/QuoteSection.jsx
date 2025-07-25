import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-[#ff6600] to-[#e55a00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your outdoor space? Contact us today for a free, 
            no-obligation quote. We'll work with you to create the perfect solution 
            for your lawn care and landscaping needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-white mr-4" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:225-369-4434" className="text-white/90 hover:text-white text-lg">
                      225-369-4434
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-white mr-4" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:SBL@southernbucklawn.com" className="text-white/90 hover:text-white">
                      SBL@southernbucklawn.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-white mr-4" />
                  <div>
                    <p className="text-white font-semibold">Service Area</p>
                    <p className="text-white/90">Walker, LA & Surrounding Areas</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-white mr-4" />
                  <div>
                    <p className="text-white font-semibold">Response Time</p>
                    <p className="text-white/90">Same Day Response Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-2 text-white/90">
                <p>• Walker, LA</p>
                <p>• Denham Springs, LA</p>
                <p>• Port Vincent, LA</p>
                <p>• Livingston, LA</p>
                <p>• And surrounding areas</p>
              </div>
            </div>
          </div>

          {/* Quote Form Placeholder */}
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Quote</h3>
            
            {/* Note: This will be replaced with actual Google Form */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-4">
                Google Form will be embedded here
              </p>
              <p className="text-sm text-gray-500">
                The user will provide the Google Form URL to replace this placeholder
              </p>
            </div>

            {/* Temporary Contact Options */}
            <div className="mt-6 space-y-4">
              <a
                href="tel:225-369-4434"
                className="w-full bg-[#32cd32] text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-[#28a428] transition-colors"
              >
                Call Now: 225-369-4434
              </a>
              <a
                href="mailto:SBL@southernbucklawn.com?subject=Free Quote Request"
                className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-700 transition-colors"
              >
                Email for Quote
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-2xl font-bold text-white mb-2">Free</h4>
            <p className="text-white/90">No-obligation quotes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-2xl font-bold text-white mb-2">Fast</h4>
            <p className="text-white/90">Same day response</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-2xl font-bold text-white mb-2">Professional</h4>
            <p className="text-white/90">Licensed & insured</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

