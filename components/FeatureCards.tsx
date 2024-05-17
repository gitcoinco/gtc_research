import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';

export const FeatureCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-gray-200">
        <CardContent>
          <p>
            Details on this feature. Details on this feature. Details on this
            feature. Details on this feature. Details on this feature. Details
            on this feature.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary">Do the thing</Button>
        </CardFooter>
      </Card>
      <Card className="bg-gray-200">
        <CardContent>
          <p>
            Details on this feature. Details on this feature. Details on this
            feature. Details on this feature. Details on this feature. Details
            on this feature.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary">Do the thing</Button>
        </CardFooter>
      </Card>
      <Card className="bg-gray-200">
        <CardContent>
          <p>
            Details on this feature. Details on this feature. Details on this
            feature. Details on this feature. Details on this feature. Details
            on this feature.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary">Do the thing</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
