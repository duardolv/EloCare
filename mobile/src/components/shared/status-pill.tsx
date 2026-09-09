import React from 'react';

import { Text } from '@/components/ui/text';

type StatusPillTone = 'neutral' | 'success' | 'warning' | 'destructive';

const TONE_CLASSES: Record<StatusPillTone, string> = {
  neutral: 'bg-muted text-muted-foreground',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/15 text-warning-foreground',
  destructive: 'bg-destructive/15 text-destructive',
};

type StatusPillProps = {
  label: string;
  tone?: StatusPillTone;
  className?: string;
};

export function StatusPill({ label, tone = 'neutral', className }: StatusPillProps) {
  return (
    <Text
      size="sm"
      className={`font-label self-start rounded-full px-3 py-1 ${TONE_CLASSES[tone]} ${className ?? ''}`}
    >
      {label}
    </Text>
  );
}
