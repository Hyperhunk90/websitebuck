import React from 'react';
import { 
  Scissors, 
  TreePine, 
  Droplets, 
  Trash2, 
  Home, 
  Wrench, 
  Palette, 
  Square, 
  Shield, 
  Flame, 
  Building, 
  Flower,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Weekly/Bi-Weekly Mowing",
      description: "Professional lawn mowing services to keep your grass healthy and perfectly maintained."
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Shrub Trimming/Removal/Planting",
      description: "Expert shrub care including trimming, removal, and new plantings for beautiful landscaping."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Mulching/Re-mulching",
      description: "Fresh mulch installation and replacement to protect plants and enhance curb appeal."
    },
    {
      icon: <Trash2 className="h-8 w-8" />,
      title: "Weed Removal",
      description: "Comprehensive weed control and removal services to keep your lawn pristine."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Gutter Cleaning",
      description: "Professional gutter cleaning and maintenance to protect your home's foundation."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Lawn Maintenance",
      description: "Complete lawn care services including fertilization, aeration, and seasonal cleanup."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Landscaping/3D Design & Planning",
      description: "Custom landscape design using 3D software for visualization and planning."
    },
    {
      icon: <Square className="h-8 w-8" />,
      title: "Hardscapes/Pavers",
      description: "Beautiful hardscape installations including patios, walkways, and driveways."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Retaining Walls",
      description: "Durable retaining wall construction for erosion control and landscape enhancement."
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Fire Pit/Outdoor Kitchens",
      description: "Custom outdoor living spaces including fire pits and complete outdoor kitchen installations."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Lawn Maintenance",
      description: "Professional commercial landscaping services for businesses and properties."
    },
    {
      icon: <Flower className="h-8 w-8" />,
      title: "Flower Bed Installation/Maintenance",
      description: "Beautiful flower bed design, installation, and ongoing maintenance services."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Pressure Washing",
      description: "Professional pressure washing for driveways, sidewalks, decks, and exterior surfaces."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#ff6600]">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From weekly mowing to complete landscape transformations, we provide comprehensive 
            lawn care and landscaping services throughout Walker, LA and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#ff6600]"
            >
              <div className="flex items-center mb-4">
                <div className="text-[#32cd32] mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#quote"
            className="btn-primary text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block"
          >
            Get Your Free Service Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

