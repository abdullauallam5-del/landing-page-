import React from 'react';
import CTAButton from './CTAButton';

const FinalCTASection: React.FC = () => {
    const handleCTAClick = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <section className="py-20 bg-gradient-to-tr from-[#0F172A] via-[#0a192f] to-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-cairo text-3xl md:text-5xl font-black max-w-3xl mx-auto leading-tight">
          الناس اللي بدأت اتحركت... الباقيين لسه مكانهم.
        </h2>
        <p className="mt-4 font-cairo text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
          ابدأ الجولة دي وخلّيها تحسب.
        </p>
        <div className="mt-10">
          <CTAButton 
            text="Join Now – 9000 EGP Only"
            className="font-poppins"
            onClick={handleCTAClick}
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;