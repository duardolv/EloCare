import { User } from 'lucide-react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { IconBadge } from '@/components/shared/icon-badge';
import { useEnterFade } from '@/lib/motion';

type FamilyMemberCardProps = {
  name: string;
  relationship: string;
  index?: number;
};

export function FamilyMemberCard({ name, relationship, index = 0 }: FamilyMemberCardProps) {
  const entrance = useEnterFade(index);

  return (
    <Animated.View style={[{ flex: 1 }, entrance]}>
      <Card className="flex-1 items-center gap-3 p-4">
        <IconBadge icon={User} tone="muted" size="lg" />
        <Text size="md" className="font-label text-center text-foreground" numberOfLines={1}>
          {name}
        </Text>
        <Text size="sm" className="text-center text-muted-foreground">
          {relationship}
        </Text>
      </Card>
    </Animated.View>
  );
}
