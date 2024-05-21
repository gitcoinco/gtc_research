/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/43NBRzwx5my
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from 'react';
import { BalanceSection } from './BalanceSection';
import { Button } from './ui/button';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
  Card,
} from './ui/card';

export default function GtcTokenCenter() {
  return (
    <div className="max-w-6xl mx-auto p-6 shadow rounded-lg">
      <div className="py-8">
        <h2 className="text-3xl font-bold">GTC Token Center</h2>
        <p className="mt-4 text-gray-600">
          GTC is a governance token that you can use to get utility within the
          Gitcoin network. With the GTC Token Center, you can manage your GTC
          balance and the benefits that come with it.
        </p>
        <Button className="mt-4" variant="secondary">
          Learn more
        </Button>
      </div>
      <BalanceSection />
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Use your GTC</h3>
        <p className="mt-2 text-gray-600">
          Put your GTC to use with these utilities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>gov.gitcoin.co</CardTitle>
              <CardDescription>
                Participate in governance to influence the direction of the
                network, especially Gitcoin Grants rounds.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Govern Gitcoin</Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Passport Staking</CardTitle>
              <CardDescription>
                Stake GTC in Gitcoin Passport to increase sybil resistance of
                yourself or others that you know.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Stake Passport</Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Grants Staking</CardTitle>
              <CardDescription>
                Stake GTC on ecological Grants to unlock more features in
                Gitcoin Grants, including 0% fees, special badges, x, y, and z.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Stake on Grants</Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Something else</CardTitle>
              <CardDescription>Feature coming soon</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline">Coming soon</Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Something else</CardTitle>
              <CardDescription>Feature coming soon</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline">Coming soon</Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Something else</CardTitle>
              <CardDescription>Feature coming soon</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline">Coming soon</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
