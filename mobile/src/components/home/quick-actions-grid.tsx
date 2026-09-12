import { Link } from 'expo-router';
import { BellRing, Calendar, Pill, Radar } from 'lucide-react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { HStack } from '@/components/ui/hstack';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { IconBadge } from '@/components/shared/icon-badge';
import { useEnterFade } from '@/lib/motion';

type ShortcutCardProps = {
  icon: React.ComponentProps<typeof IconBadge>['icon'];
  tone: React.ComponentProps<typeof IconBadge>['tone'];
  label: string;
  hasNotificationDot?: boolean;
  onPress?: () => void;
  index?: number;
};

function ShortcutCard({ icon, tone, label, hasNotificationDot, onPress, index = 0 }: ShortcutCardProps) {
  const entrance = useEnterFade(index);

  return (
    <Animated.View style={[{ flex: 1 }, entrance]}>
      <Pressable onPress={onPress} className="flex-1">
        <Card className="min-h-[110px] items-start justify-between gap-3 border-0">
          <Box>
            <IconBadge icon={icon} tone={tone} size="sm" />
            {hasNotificationDot ? (
              <Box className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-card bg-destructive" />
            ) : null}
          </Box>
          <Text size="md" className="font-label">
            {label}
          </Text>
        </Card>
      </Pressable>
    </Animated.View>
  );
}

export function QuickActionsGrid() {
  return (
    <>
      <HStack space="lg">
        <Link href="/care" asChild>
          <ShortcutCard icon={Radar} tone="primary" label="Radar" index={0} />
        </Link>
        <ShortcutCard icon={Pill} tone="accent" label="Medicamentos" index={1} />
      </HStack>
      <HStack space="lg">
        <Link href="/agenda" asChild>
          <ShortcutCard icon={Calendar} tone="primary" label="Agenda" index={2} />
        </Link>
        <ShortcutCard icon={BellRing} tone="destructive" label="Alertas" hasNotificationDot index={3} />
      </HStack>
    </>
  );
}
