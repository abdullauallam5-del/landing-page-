import React from 'react';
import { TRAINER_IMAGE_URL } from '../constants';

const TrainerSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7f4ef] to-white text-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="font-cairo text-4xl md:text-5xl font-black">
                <span className="font-poppins">Meet the Trainer</span> 👇
            </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
          <div className="md:w-2/5 flex-shrink-0">
            <img 
              src={TRAINER_IMAGE_URL} 
              alt="Course Trainer" 
              className="rounded-xl object-cover w-full h-auto max-w-sm mx-auto shadow-2xl"
            />
          </div>
          <div className="md:w-3/5 text-center md:text-right">
            <p className="font-cairo text-xl md:text-2xl text-slate-800 leading-relaxed">
              مدرب الكورس خبير <span className="font-poppins font-semibold">Ecommerce</span> اشتغل مع أكتر من <span className="font-poppins font-semibold">300 Project</span> وحقق أرقام حقيقية في السوق العربي والخليجي.
            </p>
            <p className="mt-4 font-cairo text-xl md:text-2xl text-slate-800 leading-relaxed font-bold">
              أسلوبه مباشر، واضح، ومبني على التجربة مش الكلام.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;