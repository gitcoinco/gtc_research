import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

//Rewrite this to use react-query

import BalanceCard from './BalanceCard';

export const BalanceSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <BalanceCard />
      <Card>
        <CardHeader>
          <CardTitle>Total GTC network staking stats</CardTitle>
          <CardDescription>
            <p className="text-lg">100m supply</p>
            <p className="text-lg">1.5m staked</p>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
