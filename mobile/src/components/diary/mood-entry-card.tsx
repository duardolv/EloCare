import React from 'react';
import Animated from 'react-native-reanimated';

import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useEnterFade } from '@/lib/motion';

type MoodEntryTone = 'success' | 'warning' | 'destructive';

const DOT_CLASSES: Record<MoodEntryTone, string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  destructive: 'bg-destructive',
};

type MoodEntryCardProps = {
  time: string;
  title: string;
  description: string;
  emoji: string;
  tone: MoodEntryTone;
  index?: number;
};

export function MoodEntryCard({ time, title, description, emoji, tone, index = 0 }: MoodEntryCardProps) {
  const entrance = useEnterFade(index);

  return (
    <Animated.View style={entrance}>
      <Box className="relative">
        <Box
          className={`absolute -left-[29px] top-1 h-4 w-4 rounded-full border-2 border-background ${DOT_CLASSES[tone]}`}
        />
        <Card className="gap-2 p-5">
          <HStack className="items-start justify-between">
            <VStack space="xs">
              <Text size="md" className="font-label text-muted-foreground">
                {time}
              </Text>
              <Text size="xl" className="font-label text-foreground">
                {title}
              </Text>
            </VStack>
            <Text size="4xl">{emoji}</Text>
          </HStack>
          <Text size="lg" className="text-muted-foreground">
            {description}
          </Text>
        </Card>
      </Box>
    </Animated.View>
  );
}
