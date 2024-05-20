import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertBalance = (
  balance: bigint,
  decimals: number = 18,
): number => {
  return Number(balance) / 10 ** decimals;
};

export const ellipsisAddress = (
  address: string,
  startLength: number = 6,
  endLength: number = 4,
): string => {
  if (!address) return '';
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};
