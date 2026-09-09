import { User } from 'lucide-react-native';
import React from 'react';

import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { IconBadge } from '@/components/shared/icon-badge';

type FamilyMemberCardProps = {
  name: string;
  relationship: string;
};

export function FamilyMemberCard({ name, relationship }: FamilyMemberCardProps) {
  return (
    <Card className="flex-1 items-center gap-3 p-4">
      <IconBadge icon={User} tone="muted" size="lg" />
      <Text size="md" className="font-label text-center text-foreground" numberOfLines={1}>
        {name}
      </Text>
      <Text size="sm" className="text-center text-muted-foreground">
        {relationship}
      </Text>
    </Card>
  );
}
