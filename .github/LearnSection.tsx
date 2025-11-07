import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';

const LearnSection: React.FC = () => {
  const learningPoints = [
    'تختار Product يبيع حتى لو السوق صعب',
    'تحسب كل Cost وتكسب فعلاً',
    'تسعّر صح وتبدأ تربح من أول Order',
    'تستخدم AI Tools تجهز الـ Branding والـ Ads',
    'تطلق أول Campaign وتتعلم منها تعمل Scaling',
    'تدير Orders وShipping بدون صداع',
    'تفهم الـ Numbers وتتحكم في البزنس مش العكس'
  ];

  const keywords = ['Product', 'Cost', 'Order', 'AI Tools', 'Branding', 'Ads', 'Campaign', 'Scaling', 'Orders', 'Shipping', 'Numbers'];
  const regex = new RegExp(`(${keywords.join('|')})`, 'g');

  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="font-cairo text-4xl md:text-5xl font-black mb-4">
             🔥 هتتعلم إزاي تبني <span className="font-poppins text-yellow-400">Business</span> بيكسب
          </h2>
          <p className="font-cairo text-2xl md:text-3xl font-bold mb-12 text-slate-300">(مش بيستهلكك)</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {learningPoints.map((point, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 p-5 rounded-lg flex items-center gap-4 transition-all duration-300 hover:border-yellow-400 hover:bg-slate-800">
                <div className="flex-shrink-0 bg-yellow-400/10 text-yellow-400 rounded-full p-2">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <p className="font-cairo text-lg md:text-xl text-slate-200">
                  {point.split(regex).filter(part => part).map((part, i) => 
                    keywords.includes(part) ? (
                      <span key={i} className="font-poppins font-semibold text-yellow-400 mx-1">{part}</span>
                    ) : (
                      part
                    )
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center font-cairo text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
          كل ده بخطة تنفيذية خطوة بخطوة = تطبق = تكسب.
        </p>
      </div>
    </section>
  );
};

export default LearnSection;