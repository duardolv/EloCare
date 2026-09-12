import React from 'react';

import { AppHeader } from '@/components/shared/app-header';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { VStack } from '@/components/ui/vstack';
import { MoodEntryCard } from '@/components/diary/mood-entry-card';
import { BottomTabInset, Spacing } from '@/constants/theme';

const ENTRIES = [
  {
    time: 'Hoje, 14:30',
    title: 'Muito bem!',
    description:
      'Dona Maria passou a tarde assistindo novela e estava bastante comunicativa. Almoçou bem.',
    emoji: '😊',
    tone: 'success' as const,
  },
  {
    time: 'Ontem, 19:15',
    title: 'Tranquilo',
    description: 'Um pouco calada após o jantar. Fomos dormir mais cedo. Sem alterações na medicação.',
    emoji: '😐',
    tone: 'warning' as const,
  },
  {
    time: 'Ontem, 09:00',
    title: 'Agitada',
    description:
      'Acordou confusa procurando pelas chaves antigas. Demorou cerca de 30 minutos para acalmar com um chá.',
    emoji: '😟',
    tone: 'destructive' as const,
  },
  {
    time: 'Terça-feira, 15:45',
    title: 'Animada',
    description: 'Recebemos visita dos netos. Foi uma tarde excelente, brincaram bastante na varanda.',
    emoji: '😊',
    tone: 'success' as const,
  },
];

export default function DiaryScreen() {
  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView ignores className on native — see app/(tabs)/index.tsx */}
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <AppHeader />
        <ScrollView
          className="flex-1"
          contentContainerClassName="px-5 pt-6"
          showsVerticalScrollIndicator={false}
        >
          <Heading size="xl" className="mb-8">
            Diário Emocional
          </Heading>

          <VStack space="lg" className="border-l-2 border-border pl-6">
            {ENTRIES.map((entry, index) => (
              <MoodEntryCard key={entry.time + entry.title} {...entry} index={index} />
            ))}
          </VStack>

          <Box style={{ height: BottomTabInset + Spacing.four }} />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
