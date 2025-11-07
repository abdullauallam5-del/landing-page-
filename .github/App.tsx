import React from 'react';
import HeroSection from './components/HeroSection';
import WhyDifferentSection from './components/WhyDifferentSection';
import LearnSection from './components/LearnSection';
import OutcomeSection from './components/OutcomeSection';
import ExpertsSection from './components/ExpertsSection';
import BonusesSection from './components/BonusesSection';
import ForWhomSection from './components/ForWhomSection';
import TrainerSection from './components/TrainerSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FinalCTASection from './components/FinalCTASection';

const App: React.FC = () => {
  return (
    <div className="bg-[#0F172A] text-slate-200 overflow-x-hidden">
      <HeroSection />
      <WhyDifferentSection />
      <LearnSection />
      <OutcomeSection />
      <ExpertsSection />
      <BonusesSection />
      <ForWhomSection />
      <TrainerSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
    </div>
  );
};

export default App;