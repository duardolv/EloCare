import React from 'react';

import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

type StatusPillTone = 'neutral' | 'success' | 'warning' | 'destructive';

const BG_CLASSES: Record<StatusPillTone, string> = {
  neutral: 'bg-muted',
  success: 'bg-success/10',
  warning: 'bg-warning/15',
  destructive: 'bg-destructive/15',
};

const TEXT_CLASSES: Record<StatusPillTone, string> = {
  neutral: 'text-muted-foreground',
  success: 'text-success',
  warning: 'text-warning-foreground',
  destructive: 'text-destructive',
};

type StatusPillSize = 'xs' | 'sm' | 'md';

const TEXT_SIZE: Record<StatusPillSize, 'xs' | 'sm' | 'md'> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
};

type StatusPillProps = {
  label: string;
  tone?: StatusPillTone;
  size?: StatusPillSize;
  icon?: React.ComponentProps<typeof Icon>['as'];
  className?: string;
};

// label-lg (16px/600) is the pill's natural size — "sm" is the 14px
// downsize seen on compact status badges (task rows, medication cards).
export function StatusPill({
  label,
  tone = 'neutral',
  size = 'sm',
  icon,
  className,
}: StatusPillProps) {
  return (
    <HStack
      space="xs"
      className={`items-center self-start rounded-full px-3 py-1 ${BG_CLASSES[tone]} ${className ?? ''}`}
    >
      {icon ? <Icon as={icon} size="sm" className={TEXT_CLASSES[tone]} /> : null}
      <Text size={TEXT_SIZE[size]} className={`font-label ${TEXT_CLASSES[tone]}`}>
        {label}
      </Text>
    </HStack>
  );
}
