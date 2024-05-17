import React from 'react';
import { Header } from './Header';
import { BalanceSection } from './BalanceSection';
import { UtilitySection } from './UtilitySection';
import { FeatureCards } from './FeatureCards';

const GTCMainComponent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <Header />
      <BalanceSection />
      <UtilitySection />
      <FeatureCards />
    </div>
  );
};

export default GTCMainComponent;
