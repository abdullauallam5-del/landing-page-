import React from 'react';
import CTAButton from './CTAButton';

const PricingSection: React.FC = () => {
  const whatsappLink = "https://wa.me/201030300808";
  return (
    <section id="pricing" className="py-20 bg-[#F5F3F0] text-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-200">
          <h2 className="font-cairo text-4xl md:text-5xl font-black mb-4">
            💰 السعر الحالي
          </h2>
          <div className="my-8">
            <p className="font-poppins text-6xl md:text-7xl font-black text-slate-900">
              9000<span className="text-3xl font-bold text-slate-600"> EGP</span>
            </p>
            <p className="font-cairo text-xl text-slate-600">فقط</p>
          </div>
          
          <ul className="space-y-4 text-lg text-slate-700 font-cairo text-right inline-block my-8">
            <li className="flex items-center gap-3 justify-end">
              <span>عدد الـ <span className="font-poppins font-semibold">Sessions</span>: من 10 إلى 12 لايف</span>
              <span className="text-xl">🎓</span>
            </li>
            <li className="flex items-center gap-3 justify-end">
              <span>المحاضرات مسجلة ومتاحة مدى الحياة</span>
              <span className="text-xl">🎥</span>
            </li>
            <li className="flex items-center gap-3 justify-end">
              <span>الموعد: الأسبوع الأخير من نوفمبر</span>
              <span className="text-xl">📅</span>
            </li>
            <li className="flex items-center gap-3 justify-end">
              <span><span className="font-poppins font-semibold">Refund</span> متاح خلال أول محاضرتين</span>
              <span className="text-xl">🔁</span>
            </li>
          </ul>

          <div className="mt-8">
            <CTAButton 
                text="سجّل الآن على WhatsApp"
                as="a"
                href={whatsappLink}
                className="font-cairo"
            />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block mt-4 font-poppins font-semibold text-green-600 hover:text-green-700">
              +201030300808
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;