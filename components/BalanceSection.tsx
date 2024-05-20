import React from 'react';
import { Card, CardContent } from './ui/card';

//Rewrite this to use react-query
import { useQuery } from '@tanstack/react-query';
import { getAddressBalance } from '@/services/balanceService';
import { convertBalance, ellipsisAddress } from '@/lib/utils';
import { Address } from 'viem';
import { useAccount } from 'wagmi';

export const BalanceSection: React.FC = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { isPending, error, data } = useQuery({
    queryKey: ['balance', address],
    queryFn: () => getAddressBalance(address as Address),
  });

  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>No wallet connected</div>;
  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  console.log('data?.toString()', data?.value.toString());
  const balanceGTC = data ? convertBalance(data?.value).toFixed(3) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card className="bg-gray-100">
        <CardContent>
          <p className="text-lg font-semibold">
            {ellipsisAddress(address as Address)} has
          </p>
          <p className="text-lg">{balanceGTC} GTC total</p>
          <p className="text-lg">0 GTC staked</p>
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
