import { ChevronRight } from 'lucide-react-native';
import React from 'react';

import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { IconBadge } from '@/components/shared/icon-badge';

type ActionListItemProps = {
  icon: React.ComponentProps<typeof IconBadge>['icon'];
  iconTone?: React.ComponentProps<typeof IconBadge>['tone'];
  iconSolid?: boolean;
  title: string;
  /** Some rows use a bold (700) title, others just the label-lg semibold
   * (600) weight — the two HTML mockups disagree row by row, so this stays
   * per-instance rather than a single hardcoded choice. */
  titleWeight?: 'bold' | 'semibold';
  subtitle: string;
  trailing?: React.ReactNode;
  onPress?: () => void;
  className?: string;
};

export function ActionListItem({
  icon,
  iconTone = 'primary',
  iconSolid = false,
  title,
  titleWeight = 'bold',
  subtitle,
  trailing = <Icon as={ChevronRight} className="text-muted-foreground" />,
  onPress,
  className,
}: ActionListItemProps) {
  return (
    <Pressable onPress={onPress}>
      <Card className={`flex-row items-center justify-between gap-4 p-5 ${className ?? ''}`}>
        <HStack space="lg" className="flex-1 items-center">
          <IconBadge icon={icon} tone={iconTone} solid={iconSolid} />
          <VStack space="xs" className="flex-1 items-start">
            {titleWeight === 'bold' ? (
              <Heading size="sm">{title}</Heading>
            ) : (
              <Text size="md" className="font-label text-foreground">
                {title}
              </Text>
            )}
            <Text size="sm" className="text-muted-foreground">
              {subtitle}
            </Text>
          </VStack>
        </HStack>
        {trailing}
      </Card>
    </Pressable>
  );
}
