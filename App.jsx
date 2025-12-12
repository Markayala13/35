import React, { useState, useEffect } from 'react';
import {
  Phone,
  TreeDeciduous,
  Trash2,
  Scissors,
  TreePine,
  Wrench,
  Truck
} from 'lucide-react';

const TreeMasterHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const galleryImages = [
    '/img/Cinematic_hero_shot_of_an_arborist_25_feet_up_in_a-1765504023598.png',
    '/img/Dramatic_close-up_action_shot_of_a_Bandit_SG-75_st-1765504433837.png',
    '/img/Dynamic_wide-angle_shot_capturing_a_4-person_tree_-1765504331936.png',
    '/img/Split-screen_comparison_of_property_transformation-1765504474805.png',
    '/img/Scene_of_a_team_working_loading_a_large_cut_tree_-1765505986886.png'
  ];

  const services = [
    {
      icon: Scissors,
      title: 'Tree Trimming & Pruning',
      description: 'Expert pruning to maintain tree health and aesthetic appeal'
    },
    {
      icon: Trash2,
      title: 'Complete Tree Removal',
      description: 'Safe removal of unwanted or hazardous trees from your property'
    },
    {
      icon: TreePine,
      title: 'Stump Grinding',
      description: 'Professional stump grinding and complete root removal services'
    },
    {
      icon: Wrench,
      title: 'Emergency Tree Service',
      description: 'Storm damage cleanup and urgent tree hazard response'
    },
    {
      icon: Truck,
      title: 'Land Clearing',
      description: 'Large-scale clearing for construction and landscaping projects'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/img/hero.png"
            alt="TreeMaster Pro Services"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-5xl">
            <h1
              className={`font-['Playfair_Display',serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                textShadow: '3px 6px 12px rgba(0,0,0,0.8)',
                transitionDelay: '200ms',
                letterSpacing: '-0.02em'
              }}
            >
              Professional Tree Removal & Cutting Services
            </h1>

            <p
              className={`font-['Inter',sans-serif] text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 font-light tracking-wide transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                textShadow: '2px 4px 8px rgba(0,0,0,0.6)',
                transitionDelay: '400ms'
              }}
            >
              Licensed, Insured & Trusted by 500+ Homeowners
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full sm:w-auto">
                Get Free Quote
              </button>
              <a
                href="tel:213-338-0162"
                className="px-10 py-5 border-3 border-white text-white text-xl font-bold rounded-2xl transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-2xl hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                213-338-0162
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Logo Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="flex items-center justify-center gap-4">
          <TreeDeciduous className="w-16 h-16 text-[#065F46]" />
          <h2 className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-bold text-[#065F46]">
            TreeMaster Pro
          </h2>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="font-['Inter',sans-serif] text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Professional tree care solutions tailored to your property's needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-['Inter',sans-serif] text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-bold text-center text-white mb-16">
            Our Work
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ aspectRatio: '9/16' }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#065F46] to-[#064E3B]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Property?
          </h2>
          <p className="font-['Inter',sans-serif] text-2xl text-white/90 mb-12">
            Get your free estimate today
          </p>
          <a
            href="tel:213-338-0162"
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-2xl font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <Phone className="w-8 h-8" />
            213-338-0162
          </a>
        </div>
      </section>
    </div>
  );
};

export default TreeMasterHero;
