import React from 'react';

import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type InfoListCardTone = 'primary' | 'destructive';

const TONE_CLASSES: Record<InfoListCardTone, string> = {
  primary: 'border-primary/20 bg-primary/10',
  destructive: 'border-destructive/20 bg-destructive/10',
};

const TONE_TEXT_CLASSES: Record<InfoListCardTone, string> = {
  primary: 'text-primary',
  destructive: 'text-destructive',
};

type InfoListCardProps = {
  icon: React.ComponentProps<typeof Icon>['as'];
  tone: InfoListCardTone;
  title: string;
  items: string[];
};

export function InfoListCard({ icon, tone, title, items }: InfoListCardProps) {
  return (
    <Card className={`flex-1 gap-3 p-4 ${TONE_CLASSES[tone]}`}>
      <HStack space="sm" className={`items-center ${TONE_TEXT_CLASSES[tone]}`}>
        <Icon as={icon} size="md" className={TONE_TEXT_CLASSES[tone]} />
        <Heading size="sm" className={TONE_TEXT_CLASSES[tone]}>
          {title}
        </Heading>
      </HStack>
      <VStack space="xs">
        {items.map((item) => (
          <Text key={item} size="sm" className="text-muted-foreground">
            {'•'} {item}
          </Text>
        ))}
      </VStack>
    </Card>
  );
}
