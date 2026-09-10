import React from 'react';

import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';

type IconBadgeTone = 'primary' | 'accent' | 'destructive' | 'muted' | 'success' | 'warning';
type IconBadgeSize = 'sm' | 'md' | 'lg';

const CONTAINER_SIZE: Record<IconBadgeSize, string> = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
};

const ICON_SIZE: Record<IconBadgeSize, 'sm' | 'md' | 'lg' | 'xl'> = {
  sm: 'lg',
  md: 'lg',
  lg: 'xl',
};

// Tint variants: soft background + colored icon. Solid variants (e.g. hero
// actions) are just tone + "-solid" and swap to the foreground token.
const TONE_CLASSES: Record<IconBadgeTone, string> = {
  primary: 'bg-primary/10',
  accent: 'bg-accent/15',
  destructive: 'bg-destructive/15',
  muted: 'bg-muted',
  success: 'bg-success/15',
  warning: 'bg-warning/15',
};

const TONE_ICON_CLASSES: Record<IconBadgeTone, string> = {
  primary: 'text-primary',
  accent: 'text-accent',
  destructive: 'text-destructive',
  muted: 'text-muted-foreground',
  success: 'text-success',
  warning: 'text-warning',
};

const SOLID_TONE_CLASSES: Record<IconBadgeTone, string> = {
  primary: 'bg-primary',
  accent: 'bg-accent',
  destructive: 'bg-destructive',
  muted: 'bg-muted',
  success: 'bg-success',
  warning: 'bg-warning',
};

// no --destructive-foreground token exists in global.css, so the destructive
// solid variant falls back to the neutral foreground instead of guessing one
const SOLID_TONE_ICON_CLASSES: Record<IconBadgeTone, string> = {
  primary: 'text-primary-foreground',
  accent: 'text-accent-foreground',
  destructive: 'text-foreground',
  muted: 'text-foreground',
  success: 'text-success-foreground',
  warning: 'text-warning-foreground',
};

type IconBadgeProps = {
  icon: React.ComponentProps<typeof Icon>['as'];
  tone?: IconBadgeTone;
  size?: IconBadgeSize;
  solid?: boolean;
  className?: string;
};

export function IconBadge({
  icon,
  tone = 'primary',
  size = 'md',
  solid = false,
  className,
}: IconBadgeProps) {
  const containerTone = solid ? SOLID_TONE_CLASSES[tone] : TONE_CLASSES[tone];
  const iconTone = solid ? SOLID_TONE_ICON_CLASSES[tone] : TONE_ICON_CLASSES[tone];

  return (
    <Box
      className={`items-center justify-center rounded-full ${CONTAINER_SIZE[size]} ${containerTone} ${className ?? ''}`}
    >
      <Icon as={icon} size={ICON_SIZE[size]} className={iconTone} />
    </Box>
  );
}
