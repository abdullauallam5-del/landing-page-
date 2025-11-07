import React from 'react';
import { VIDEO_TESTIMONIALS, IMAGE_TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#0F172A] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-cairo text-4xl md:text-5xl font-black mb-4">
            نتائج حقيقية من ناس حقيقية 💬
          </h2>
          <p className="font-cairo text-xl md:text-2xl text-slate-300 mb-12">
            شوف بنفسك 👇
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VIDEO_TESTIMONIALS.map((videoSrc, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-lg aspect-w-9 aspect-h-16">
              <video
                src={videoSrc}
                controls
                className="w-full h-full object-cover"
                preload="metadata"
              />
            </div>
          ))}
        </div>

        {/* Image Testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {IMAGE_TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center group transition-all duration-300 hover:border-yellow-400 hover:bg-slate-800">
              <img 
                src={testimonial.src}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-auto rounded-md mb-4 object-cover"
                loading="lazy"
              />
              <p className="font-cairo text-sm md:text-base text-slate-300 group-hover:text-yellow-300">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;