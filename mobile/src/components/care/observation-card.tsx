import React from 'react';

import { Card } from '@/components/ui/card';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

type ObservationCardProps = {
  icon: React.ComponentProps<typeof Icon>['as'];
  label: string;
  description: string;
};

export function ObservationCard({ icon, label, description }: ObservationCardProps) {
  return (
    <Card className="flex-1 gap-3 p-4">
      <HStack space="sm" className="items-center">
        <Icon as={icon} size="lg" className="text-primary" />
        <Text size="md" className="font-label text-foreground">
          {label}
        </Text>
      </HStack>
      <Text size="sm" className="leading-snug text-muted-foreground">
        {description}
      </Text>
    </Card>
  );
}
