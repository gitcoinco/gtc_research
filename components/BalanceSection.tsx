import React from 'react';
import { Card, CardContent } from './ui/card';

export const BalanceSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card className="bg-gray-100">
        <CardContent>
          <p className="text-lg font-semibold">0xabcd......ef has</p>
          <p className="text-lg">100k GTC total</p>
          <p className="text-lg">100k GTC staked</p>
        </CardContent>
      </Card>
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
