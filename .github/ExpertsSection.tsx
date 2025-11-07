import React from 'react';
import { GUEST_EXPERTS } from '../constants';

const ExpertsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-cairo text-4xl md:text-5xl font-black mb-4">
            <span className="font-poppins">👥 Guest Experts</span>
          </h2>
          <p className="font-cairo text-xl md:text-2xl text-slate-300 mb-12">
            ناس اشتغلت فعلاً وبتحقق <span className="font-poppins font-semibold text-yellow-400">Results</span>:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {GUEST_EXPERTS.map((expert, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg text-center transition-all duration-300 hover:border-yellow-400 hover:bg-slate-800 hover:-translate-y-1">
              <h3 className="font-cairo text-lg font-bold text-white">{expert.name}</h3>
              <p className="font-poppins text-sm text-yellow-400">{expert.skill}</p>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-center font-cairo text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
          كل <span className="font-poppins font-semibold">Guest</span> بيشارك <span className="font-poppins font-semibold">Tools & Frameworks</span> تشتغل بيها فورًا.
        </p>
      </div>
    </section>
  );
};

export default ExpertsSection;