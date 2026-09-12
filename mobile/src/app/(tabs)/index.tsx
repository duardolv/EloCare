import { Link } from 'expo-router';
import { BookOpen, Footprints, Sparkles } from 'lucide-react-native';
import React from 'react';

import { AppHeader } from '@/components/shared/app-header';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { ActionListItem } from '@/components/shared/action-list-item';
import { DailyStatusCard } from '@/components/home/daily-status-card';
import { QuickActionsGrid } from '@/components/home/quick-actions-grid';
import { BottomTabInset, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  const [safeExitMode, setSafeExitMode] = React.useState(false);

  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView (react-native-safe-area-context) ignores className on
          native — it's a plain Fabric view under the hood — so flex sizing
          has to go through style here instead. */}
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <AppHeader />
        <ScrollView
          className="flex-1"
          contentContainerClassName="gap-6 px-5 pt-4"
          showsVerticalScrollIndicator={false}
        >
          <VStack space="xs">
            <Heading size="xl">Olá, Família</Heading>
            <Text size="lg" className="text-muted-foreground">
              Como estão as coisas hoje?
            </Text>
          </VStack>

          <DailyStatusCard />

          <VStack space="lg">
            <QuickActionsGrid />

            <Link href="/weekly-summary" asChild>
              <ActionListItem
                icon={Sparkles}
                iconSolid
                title="Resumo Semanal"
                subtitle="Insights gentis sobre a rotina"
                index={0}
              />
            </Link>

            <Link href="/safe-exit" asChild>
              <ActionListItem
                icon={Footprints}
                iconTone="muted"
                title="Modo Saída Segura"
                subtitle="Ative para passeios longos"
                trailing={<Switch value={safeExitMode} onValueChange={setSafeExitMode} />}
                className="border-0"
                index={1}
              />
            </Link>

            <Link href="/diary" asChild>
              <ActionListItem
                icon={BookOpen}
                iconTone="accent"
                iconSolid
                title="Diário Emocional"
                subtitle="Verifique como foi a semana"
                className="border-accent/50 bg-accent/20"
                index={2}
              />
            </Link>
          </VStack>

          {/* Clears the floating native tab bar — a contentContainerStyle prop
              here would silently replace (not merge with) the padding/gap
              from contentContainerClassName above, so it's a plain spacer instead. */}
          <Box style={{ height: BottomTabInset + Spacing.four }} />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
