import { Check, Minus } from 'lucide-react-native';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

export type DayStatus = 'missed' | 'taken' | 'today' | 'pending';

type DayStatusDotProps = {
  letter: string;
  status: DayStatus;
};

export function DayStatusDot({ letter, status }: DayStatusDotProps) {
  return (
    <Box className="items-center gap-2">
      <Text
        size="sm"
        className={
          status === 'today'
            ? 'font-label text-foreground'
            : status === 'pending'
              ? 'text-muted-foreground/50'
              : 'text-muted-foreground'
        }
      >
        {letter}
      </Text>

      {status === 'missed' ? (
        <Box className="h-10 w-10 items-center justify-center rounded-full border-2 border-warning/50 bg-muted">
          <Icon as={Minus} size="sm" className="text-warning" />
        </Box>
      ) : status === 'pending' ? (
        <Box className="h-10 w-10 rounded-full border-2 border-dashed border-border" />
      ) : (
        <Box
          className={`h-10 w-10 items-center justify-center rounded-full bg-success shadow-sm ${
            status === 'today' ? 'ring-4 ring-success/20' : ''
          }`}
        >
          <Icon as={Check} size="sm" className="text-success-foreground" />
        </Box>
      )}
    </Box>
  );
}
