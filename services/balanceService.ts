import { getBalance } from '@wagmi/core';
import { config } from '../lib/wagmiConfig';
import { Address } from 'viem';

const gtcTokenAddress = process.env.GTC_TOKEN_ADDRESS as Address;

export async function getAddressBalance(address: Address) {
  const balance = await getBalance(config, {
    address,
    token: gtcTokenAddress,
  });
  return balance;
}
