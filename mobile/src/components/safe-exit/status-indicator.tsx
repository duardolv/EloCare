import { Shield, ShieldOff } from 'lucide-react-native';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';

type StatusIndicatorProps = {
  active: boolean;
};

export function StatusIndicator({ active }: StatusIndicatorProps) {
  return (
    <Box className="mb-8 h-32 w-32 items-center justify-center rounded-full bg-muted shadow-sm">
      <Box
        className={`absolute inset-0 rounded-full border-4 opacity-30 ${
          active ? 'border-primary' : 'border-border'
        }`}
      />
      <Icon
        as={active ? Shield : ShieldOff}
        width={64}
        height={64}
        className={active ? 'text-primary' : 'text-muted-foreground'}
      />
    </Box>
  );
}
