import React from 'react';

import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

type TrendRowProps = {
  icon: React.ComponentProps<typeof Icon>['as'];
  label: string;
};

export function TrendRow({ icon, label }: TrendRowProps) {
  return (
    <HStack space="xs" className="mt-auto items-center">
      <Icon as={icon} size="sm" className="text-success" />
      <Text size="md" className="font-label text-success">
        {label}
      </Text>
    </HStack>
  );
}
