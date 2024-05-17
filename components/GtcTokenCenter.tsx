import React from 'react';
import { Hero } from './Hero';
import { BalanceSection } from './BalanceSection';
import { UtilitySection } from './UtilitySection';
import { FeatureCards } from './FeatureCards';

const GTCMainComponent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <Hero />
      <BalanceSection />
      <UtilitySection />
      <FeatureCards />
    </div>
  );
};

export default GTCMainComponent;
