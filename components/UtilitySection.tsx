import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from './ui/card';
import { Button } from './ui/button';

export const UtilitySection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Use your GTC</h2>
      <p className="mb-6">Put your GTC to use with these utilities.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>gov.gitcoin.co</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Participate in governance to influence the direction of the
              network, especially Gitcoin Grants rounds.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default">Govern Gitcoin</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Passport Staking</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Stake GTC in Gitcoin Passport to increase sybil resistance of
              yourself or others that you know.
            </p>
            <p>One day, earn rewards for doing so.</p>
          </CardContent>
          <CardFooter>
            <Button variant="default">Stake Passport</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Grants Staking</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Stake GTC on ecological Grants to unlock more features in Gitcoin
              Grants, including 0% fees, special badges, x, y, and z.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default">Stake on Grants</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
