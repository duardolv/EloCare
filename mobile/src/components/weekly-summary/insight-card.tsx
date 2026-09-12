import React from 'react';
import Animated from 'react-native-reanimated';

import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { IconBadge } from '@/components/shared/icon-badge';
import { useEnterFade } from '@/lib/motion';

type InsightCardProps = {
  icon: React.ComponentProps<typeof Icon>['as'];
  tone: React.ComponentProps<typeof IconBadge>['tone'];
  title: string;
  description: string;
  children?: React.ReactNode;
  index?: number;
};

export function InsightCard({ icon, tone, title, description, children, index = 0 }: InsightCardProps) {
  const entrance = useEnterFade(index);

  return (
    <Animated.View style={entrance}>
      <Card className="flex-1 gap-4 p-5">
        <HStack space="sm" className="items-center">
          <IconBadge icon={icon} tone={tone} />
          <Heading size="lg">{title}</Heading>
        </HStack>
        <Text size="lg" className="text-muted-foreground">
          {description}
        </Text>
        {children}
      </Card>
    </Animated.View>
  );
}
