import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Southern Bucks <span className="text-[#ff6600]">Lawnscaping</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional lawn care and landscaping services in Walker, LA and surrounding areas. 
              We treat every yard as if it were our own, bringing 13+ years of experience and 
              passion to every project.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#ff6600] mr-3" />
                <a href="tel:225-369-4434" className="text-gray-300 hover:text-white">
                  225-369-4434
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#ff6600] mr-3" />
                <a href="mailto:SBL@southernbucklawn.com" className="text-gray-300 hover:text-white">
                  SBL@southernbucklawn.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#ff6600] mr-3" />
                <span className="text-gray-300">Brett Dr., Walker, LA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#ff6600] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#ff6600] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-[#ff6600] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-[#ff6600] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#ff6600] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/service-areas/walker" className="text-gray-300 hover:text-[#ff6600] transition-colors">
                  Walker, LA
                </Link>
              </li>
              <li>
                <Link to="/service-areas/denham-springs" className="text-gray-300 hover:text-[#ff6600] transition-colors">
                  Denham Springs, LA
                </Link>
              </li>
              <li>
                <Link to="/service-areas/port-vincent" className="text-gray-300 hover:text-[#ff6600] transition-colors">
                  Port Vincent, LA
                </Link>
              </li>
              <li>
                <Link to="/service-areas/livingston" className="text-gray-300 hover:text-[#ff6600] transition-colors">
                  Livingston, LA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-300">
            <span>Weekly/Bi-Weekly Mowing</span>
            <span>Shrub Trimming & Planting</span>
            <span>Mulching & Re-mulching</span>
            <span>Weed Removal</span>
            <span>Gutter Cleaning</span>
            <span>Lawn Maintenance</span>
            <span>Landscape Design</span>
            <span>Hardscapes & Pavers</span>
            <span>Retaining Walls</span>
            <span>Fire Pits & Outdoor Kitchens</span>
            <span>Commercial Maintenance</span>
            <span>Flower Bed Installation</span>
            <span>Pressure Washing</span>
            <span>3D Design & Planning</span>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-[#ff6600] transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#ff6600] transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} Southern Bucks Lawnscaping. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Licensed & Insured • Walker, LA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

