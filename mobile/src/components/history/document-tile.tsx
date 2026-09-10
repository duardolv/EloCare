import React from 'react';

import { Card } from '@/components/ui/card';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { IconBadge } from '@/components/shared/icon-badge';

type DocumentTileProps = {
  icon: React.ComponentProps<typeof IconBadge>['icon'];
  tone: React.ComponentProps<typeof IconBadge>['tone'];
  label: string;
  onPress?: () => void;
};

export function DocumentTile({ icon, tone, label, onPress }: DocumentTileProps) {
  return (
    <Pressable onPress={onPress} className="active:opacity-80">
      <Card className="w-[120px] items-center gap-2 p-4">
        <IconBadge icon={icon} tone={tone} size="sm" />
        <Text size="sm" className="text-center text-muted-foreground">
          {label}
        </Text>
      </Card>
    </Pressable>
  );
}
