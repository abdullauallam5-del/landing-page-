import React from 'react';
import CTAButton from './CTAButton';
import { CheckIcon } from '../icons/CheckIcon';
import { TRAINER_IMAGE_URL } from '../constants';

const HeroSection: React.FC = () => {
    const handleCTAClick = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0F172A] via-[#0a192f] to-black text-white flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-700/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-xl opacity-20"></div>
                <img 
                    src={TRAINER_IMAGE_URL} 
                    alt="Course Trainer" 
                    className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-slate-700 shadow-2xl filter drop-shadow-[0_10px_20px_rgba(251,191,36,0.2)]"
                />
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-right">
            <h1 className="font-poppins text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Ecommerce End Game <span className="text-[#FBBF24]">V2.0</span> 🔥
            </h1>
            <p className="mt-4 font-cairo text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              آخر كورس هتحتاجه في حياتك لو ناوي تدخل عالم الـ Ecommerce وتكسب منه بجد.
            </p>
            <p className="mt-4 font-cairo text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0">
              مفيش نظري، مفيش كلام فاضي. كل Session فيها خطوات حقيقية من ناس بتعمل أرقام فعلًا.
            </p>
            
            <ul className="mt-8 space-y-4 text-lg text-slate-300 inline-block text-right">
              <li className="flex items-center justify-end gap-3">
                <span>هتفهم ازاي تختار الـ <span className="font-poppins font-semibold text-yellow-400">Product</span> الصح</span>
                <CheckIcon className="w-6 h-6 text-yellow-400" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span>تطلق إعلانات بتبيع فعلًا</span>
                 <CheckIcon className="w-6 h-6 text-yellow-400" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span>تبني <span className="font-poppins font-semibold text-yellow-400">System</span> يخليك تدير البزنس وانت متطمن</span>
                 <CheckIcon className="w-6 h-6 text-yellow-400" />
              </li>
            </ul>

            <div className="mt-10">
                <CTAButton 
                    text="ابدأ الرحلة دلوقتي بـ 9000 جنيه فقط"
                    onClick={handleCTAClick}
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;