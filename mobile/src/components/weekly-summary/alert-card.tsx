import React from 'react';

import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { IconBadge } from '@/components/shared/icon-badge';
import { StatusPill } from '@/components/shared/status-pill';

type AlertCardTone = 'destructive' | 'warning';

const CARD_TONE_CLASSES: Record<AlertCardTone, string> = {
  destructive: 'border-destructive/40 bg-destructive/10',
  warning: 'border-border bg-card',
};

const STATUS_PILL_TONE: Record<AlertCardTone, 'destructive' | 'warning'> = {
  destructive: 'destructive',
  warning: 'warning',
};

type AlertCardProps = {
  icon: React.ComponentProps<typeof Icon>['as'];
  tone: AlertCardTone;
  tagLabel: string;
  description: string;
};

export function AlertCard({ icon, tone, tagLabel, description }: AlertCardProps) {
  return (
    <Card className={`flex-row gap-4 ${CARD_TONE_CLASSES[tone]}`}>
      <IconBadge icon={icon} tone={tone} size="sm" />
      <VStack space="xs" className="flex-1 items-start">
        <StatusPill tone={STATUS_PILL_TONE[tone]} label={tagLabel} />
        <Text size="md" className="leading-tight text-foreground">
          {description}
        </Text>
      </VStack>
    </Card>
  );
}
