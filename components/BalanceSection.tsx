import React from 'react';
import { Card, CardContent } from './ui/card';

//Rewrite this to use react-query

import BalanceCard from './BalanceCard';

export const BalanceSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <BalanceCard />
      <Card className="bg-gray-100">
        <CardContent>
          <p className="text-lg font-semibold">
            Total GTC network staking stats
          </p>
          <p className="text-lg">100m supply</p>
          <p className="text-lg">1.5m staked</p>
        </CardContent>
      </Card>
    </div>
  );
};
