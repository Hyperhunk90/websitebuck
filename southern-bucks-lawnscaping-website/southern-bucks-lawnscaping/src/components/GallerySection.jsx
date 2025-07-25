import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import galleryImage1 from '../assets/images/gallery/gallery_image1.jpg';
import galleryImage2 from '../assets/images/gallery/gallery_image2.jpg';
import galleryImage3 from '../assets/images/gallery/gallery_image3.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: galleryImage1,
      alt: "Beautiful landscaping project with garden design",
      category: "Landscaping",
      title: "Garden Transformation"
    },
    {
      src: galleryImage2,
      alt: "Professional lawn maintenance and landscaping",
      category: "Lawn Care",
      title: "Lawn Maintenance"
    },
    {
      src: galleryImage3,
      alt: "Landscaping design and maintenance",
      category: "Design",
      title: "Landscape Design"
    },
    // Placeholder images for additional gallery items
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Hardscape patio installation",
      category: "Hardscaping",
      title: "Patio Installation"
    },
    {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Retaining wall construction",
      category: "Hardscaping",
      title: "Retaining Wall"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Professional lawn mowing service",
      category: "Lawn Care",
      title: "Lawn Mowing"
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Flower bed installation and maintenance",
      category: "Landscaping",
      title: "Flower Beds"
    },
    {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Outdoor kitchen and fire pit area",
      category: "Outdoor Living",
      title: "Outdoor Kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Commercial landscaping project",
      category: "Commercial",
      title: "Commercial Project"
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#ff6600]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our completed projects throughout Walker, LA and surrounding areas. 
            Each project showcases our commitment to quality and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {image.title}
                  </h3>
                  <span className="text-[#32cd32] text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Ready to transform your outdoor space?
          </p>
          <a
            href="#quote"
            className="btn-primary text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block"
          >
            Start Your Project Today
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
              <span className="text-[#32cd32] text-sm">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

