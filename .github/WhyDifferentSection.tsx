import React from 'react';

const WhyDifferentSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F3F0] text-[#0F172A]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-cairo text-4xl md:text-5xl font-black mb-6">
          <span className="text-yellow-500">💡</span> ليه الكورس ده مختلف؟
        </h2>
        <div className="max-w-3xl mx-auto font-cairo text-xl md:text-2xl leading-relaxed text-slate-800 space-y-6">
          <p>
            الفرق هنا إنك مش بتتعلم نظري. كل حاجة بتشوفها بتتطبق قدامك — من اختيار المنتج للتسعير والتشغيل والأرباح.
          </p>
          <p className="font-bold text-slate-900">
            ده مش كورس… دي تجربة كاملة.
          </p>
          <p>
            كل <span className="font-poppins font-semibold">Session</span> فيها <span className="font-poppins font-semibold">Action Steps</span> تمشي بيها تاني يوم، مش كلام.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;