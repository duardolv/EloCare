import React from 'react';

import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

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
};

export function MoodEntryCard({ time, title, description, emoji, tone }: MoodEntryCardProps) {
  return (
    <Box className="relative">
      <Box
        className={`absolute -left-[29px] top-1 h-4 w-4 rounded-full border-2 border-background ${DOT_CLASSES[tone]}`}
      />
      <Card className="gap-2 p-5">
        <HStack className="items-start justify-between">
          <VStack space="xs">
            <Text size="sm" className="font-label text-muted-foreground">
              {time}
            </Text>
            <Heading size="lg">{title}</Heading>
          </VStack>
          <Text size="4xl">{emoji}</Text>
        </HStack>
        <Text size="md" className="text-muted-foreground">
          {description}
        </Text>
      </Card>
    </Box>
  );
}
