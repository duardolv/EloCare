import React from 'react';
import Animated from 'react-native-reanimated';

import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { IconBadge } from '@/components/shared/icon-badge';
import { useEnterFade } from '@/lib/motion';

type AlertCardTone = 'destructive' | 'warning';

const CARD_TONE_CLASSES: Record<AlertCardTone, string> = {
  destructive: 'border-destructive/40 bg-destructive/10',
  warning: 'border-border bg-card',
};

const TAG_CLASSES: Record<AlertCardTone, string> = {
  destructive: 'bg-destructive/15 text-destructive',
  warning: 'bg-warning/15 text-warning-foreground',
};

type AlertCardProps = {
  icon: React.ComponentProps<typeof Icon>['as'];
  tone: AlertCardTone;
  tagLabel: string;
  description: string;
  index?: number;
};

export function AlertCard({ icon, tone, tagLabel, description, index = 0 }: AlertCardProps) {
  const entrance = useEnterFade(index);

  return (
    <Animated.View style={entrance}>
      <Card className={`flex-row gap-4 ${CARD_TONE_CLASSES[tone]}`}>
        <IconBadge icon={icon} tone={tone} size="sm" />
        <VStack space="xs" className="flex-1 items-start">
          {/* Eyebrow tag — bold/uppercase, not the label-lg-based StatusPill */}
          <Text
            size="xs"
            className={`self-start rounded-full px-2 py-0.5 font-heading uppercase tracking-wide ${TAG_CLASSES[tone]}`}
          >
            {tagLabel}
          </Text>
          <Text size="lg" className="leading-tight text-foreground">
            {description}
          </Text>
        </VStack>
      </Card>
    </Animated.View>
  );
}
