import React from 'react';
import Animated from 'react-native-reanimated';

import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { IconBadge } from '@/components/shared/icon-badge';
import { useEnterFade } from '@/lib/motion';

type AppointmentCardProps = {
  icon: React.ComponentProps<typeof Icon>['as'];
  tone: NonNullable<React.ComponentProps<typeof IconBadge>['tone']>;
  kind: string;
  title: string;
  faded?: boolean;
  index?: number;
};

const KIND_TEXT_CLASSES: Record<string, string> = {
  primary: 'text-primary',
  warning: 'text-warning',
  accent: 'text-accent',
};

export function AppointmentCard({ icon, tone, kind, title, faded = false, index = 0 }: AppointmentCardProps) {
  const entrance = useEnterFade(index);

  return (
    <Animated.View style={entrance}>
      <Card className={`gap-4 p-5 ${faded ? 'opacity-70' : ''}`}>
        <HStack space="sm" className="items-center">
          <IconBadge icon={icon} tone={tone} size="sm" />
          <Text size="md" className={`font-label uppercase tracking-wider ${KIND_TEXT_CLASSES[tone] ?? 'text-primary'}`}>
            {kind}
          </Text>
        </HStack>
        <Heading size="lg">{title}</Heading>
      </Card>
    </Animated.View>
  );
}
