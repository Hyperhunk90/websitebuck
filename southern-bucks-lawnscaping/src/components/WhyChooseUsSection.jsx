import React from 'react';
import { 
  Award, 
  Wrench, 
  Heart, 
  MapPin, 
  Clock, 
  Shield,
  Users,
  Zap
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "13+ Years of Experience",
      description: "Shane brings over 13 years of professional experience as an industrial electrician, now channeling that precision and expertise into lawn care and landscaping."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Brand New Equipment",
      description: "We've invested in all new, professional-grade equipment to ensure the highest quality results for every project, big or small."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passionate Dedication",
      description: "We treat every client's yard as if it were our own. Your satisfaction and the beauty of your outdoor space is our top priority."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local Walker, LA Business",
      description: "Based right here in Walker, LA on Brett Dr., we understand the local climate, soil conditions, and what works best in our area."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliable & Punctual",
      description: "Count on us for consistent, on-time service. We respect your schedule and always deliver when promised."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fully Insured",
      description: "Complete peace of mind with full insurance coverage for all our services and your property protection."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalized Service",
      description: "Every property is unique, and we tailor our services to meet your specific needs and vision for your outdoor space."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Complete Transformation",
      description: "From simple maintenance to complete landscape makeovers, we have the skills and passion to transform any outdoor space."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#32cd32]">Southern Bucks</span> Lawnscaping?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            When you choose Southern Bucks Lawnscaping, you're choosing a partner who is passionate 
            about creating beautiful outdoor spaces. Here's what sets us apart as the number one 
            choice for lawn care and landscaping in Walker, LA.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600] rounded-full mb-4 group-hover:bg-[#32cd32] transition-colors duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Owner Story */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12 border border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Meet Shane Dantone, Owner & Operator
            </h3>
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                At 35 years old, Shane Dantone has made a passionate transition from 13 years 
                as an industrial electrician to pursuing his dream of creating beautiful outdoor 
                spaces. This isn't just a career change – it's a calling.
              </p>
              <p>
                Shane has invested fully in this venture, acquiring all new, professional-grade 
                equipment and bringing the same precision and attention to detail that made him 
                successful in the electrical field to every landscaping project.
              </p>
              <p className="text-[#ff6600] font-semibold text-xl">
                "I treat every client's yard as if it were my own."
              </p>
              <p>
                This philosophy drives everything we do at Southern Bucks Lawnscaping. When you 
                choose us, you're not just hiring a lawn care service – you're partnering with 
                someone who genuinely cares about the beauty and health of your outdoor space.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Experience the Southern Bucks difference for yourself
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="#quote"
              className="btn-primary text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:225-369-4434"
              className="btn-secondary text-black px-8 py-4 rounded-lg text-lg font-semibold inline-block"
            >
              Call 225-369-4434
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

