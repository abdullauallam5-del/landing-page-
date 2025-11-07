import React from 'react';

const OutcomeSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F3F0] text-[#0F172A]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-cairo text-4xl md:text-5xl font-black mb-6">
          <span className="text-yellow-500">🎯</span> النتيجة اللي هتخرج بيها
        </h2>
        <div className="max-w-3xl mx-auto font-cairo text-xl md:text-2xl leading-relaxed text-slate-800 space-y-6">
          <p className="font-bold text-slate-900">
            مش معلومات… <span className="font-poppins text-yellow-600">System</span> شغال بفلوس حقيقية.
          </p>
          <p>
            من أول <span className="font-poppins font-semibold">Product Selection</span>، للـ <span className="font-poppins font-semibold">Ads</span>، للتشغيل والمحاسبة.
          </p>
          <p>
            هتفهم اللعبة من جوّا، تعرف توسّع صح وتضاعف أرباحك في نفس الـ <span className="font-poppins font-semibold">Budget</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;