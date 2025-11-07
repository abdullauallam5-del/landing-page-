import React from 'react';

const BonusesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F3F0] text-[#0F172A]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-cairo text-4xl md:text-5xl font-black mb-6">
          <span className="font-poppins text-yellow-500">🎁 Bonuses & Tools</span>
        </h2>
        <div className="max-w-3xl mx-auto font-cairo text-xl md:text-2xl leading-relaxed text-slate-800 space-y-6">
          <p>
            <span className="font-poppins font-semibold">Access</span> لمجموعة <span className="font-poppins font-semibold">Tools</span> و<span className="font-poppins font-semibold">Materials</span> جاهزة توفر عليك شهور.
          </p>
          <p className="font-bold text-slate-900">
            كل شيت تمنه لوحده أكتر من تمن الكورس.
          </p>
          <p>
            والتحديثات والـ <span className="font-poppins font-semibold">Guests</span> الجديدة جاية 🔥
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;