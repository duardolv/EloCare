import React from 'react';
import Animated from 'react-native-reanimated';

import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useEnterFade } from '@/lib/motion';

type TimelineItemTone = 'primary' | 'warning';

const DOT_BORDER_CLASSES: Record<TimelineItemTone, string> = {
  primary: 'border-primary',
  warning: 'border-warning',
};

const TAG_TEXT_CLASSES: Record<TimelineItemTone, string> = {
  primary: 'text-primary',
  warning: 'text-muted-foreground',
};

type TimelineItemProps = {
  tone: TimelineItemTone;
  title: string;
  time: string;
  description: string;
  tag?: {
    icon: React.ComponentProps<typeof Icon>['as'];
    label: string;
  };
  faded?: boolean;
  index?: number;
};

export function TimelineItem({ tone, title, time, description, tag, faded = false, index = 0 }: TimelineItemProps) {
  const entrance = useEnterFade(index);

  return (
    <Animated.View style={entrance}>
      <Box className="flex-row gap-3">
        <Box
          className={`mt-1 h-3 w-3 rounded-full border-2 bg-card ${DOT_BORDER_CLASSES[tone]}`}
        />
        <Card className={`flex-1 gap-1 p-3 ${faded ? 'opacity-80' : ''}`}>
          <HStack className="items-start justify-between">
            <Heading size="sm">{title}</Heading>
            <Text size="xs" className="text-muted-foreground">
              {time}
            </Text>
          </HStack>
          <Text size="sm" className="text-muted-foreground">
            {description}
          </Text>
          {tag ? (
            <HStack space="xs" className="mt-1 items-center self-start rounded-md bg-muted px-2 py-1">
              <Icon as={tag.icon} size="sm" className={TAG_TEXT_CLASSES[tone]} />
              <Text size="xs" className={`font-label ${TAG_TEXT_CLASSES[tone]}`}>
                {tag.label}
              </Text>
            </HStack>
          ) : null}
        </Card>
      </Box>
    </Animated.View>
  );
}
