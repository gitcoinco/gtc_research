import { useQuery } from '@tanstack/react-query';
import { getAddressBalance } from '@/services/balanceService';
import { convertBalance, ellipsisAddress } from '@/lib/utils';
import { Address } from 'viem';
import { useAccount } from 'wagmi';
import { Card, CardContent } from './ui/card';
export default function BalanceCard() {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { isPending, error, data } = useQuery({
    queryKey: ['balance', address],
    queryFn: () => getAddressBalance(address as Address),
  });

  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected)
    return (
      <Card className="bg-gray-100">
        <CardContent>
          <p className="text-lg font-semibold">
            Connect your wallet to see your balances
          </p>
        </CardContent>
      </Card>
    );
  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  const balanceGTC = data ? convertBalance(data?.value).toFixed(3) : 0;
  return (
    <Card className="bg-gray-100">
      <CardContent>
        <p className="text-lg font-semibold">
          {ellipsisAddress(address as Address)} has
        </p>
        <p className="text-lg">{balanceGTC} GTC total</p>
        <p className="text-lg">0 GTC staked</p>
      </CardContent>
    </Card>
  );
}
