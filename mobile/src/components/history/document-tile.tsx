import React from 'react';
import Animated from 'react-native-reanimated';

import { Card } from '@/components/ui/card';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { IconBadge } from '@/components/shared/icon-badge';
import { useEnterFade } from '@/lib/motion';

type DocumentTileProps = {
  icon: React.ComponentProps<typeof IconBadge>['icon'];
  tone: React.ComponentProps<typeof IconBadge>['tone'];
  label: string;
  onPress?: () => void;
  index?: number;
};

export function DocumentTile({ icon, tone, label, onPress, index = 0 }: DocumentTileProps) {
  const entrance = useEnterFade(index);

  return (
    <Animated.View style={entrance}>
      <Pressable onPress={onPress}>
        <Card className="w-[120px] items-center gap-2 p-4">
          <IconBadge icon={icon} tone={tone} size="sm" />
          <Text size="sm" className="font-label text-center text-muted-foreground">
            {label}
          </Text>
        </Card>
      </Pressable>
    </Animated.View>
  );
}
