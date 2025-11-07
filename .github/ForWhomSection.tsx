import React from 'react';

const ForWhomSection: React.FC = () => {
    const targetAudience = [
        "مبتدئ وعايز تبدأ Ecommerce صح",
        "عندك خبرة بس واقف في النص",
        "شغال وعايز تزود أرباحك"
    ];
  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-cairo text-4xl md:text-5xl font-black mb-10">
          <span className="font-poppins">📈</span> الكورس ده لمين؟
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-6">
            {targetAudience.map((item, index) => (
                 <div key={index} className="bg-slate-800 border border-slate-700 p-6 rounded-lg">
                    <p className="font-cairo text-xl md:text-2xl text-slate-200">
                        {item} <span className="text-green-400">✅</span>
                    </p>
                </div>
            ))}
        </div>

        <p className="mt-10 font-cairo text-2xl font-bold text-yellow-400">
          الكورس معمول ليك.
        </p>
      </div>
    </section>
  );
};

export default ForWhomSection;