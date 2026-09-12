import { Droplet, Pill } from 'lucide-react-native';
import React from 'react';

import { AppHeader } from '@/components/shared/app-header';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { DayStatus } from '@/components/adherence/day-status-dot';
import { MedicationCard } from '@/components/adherence/medication-card';
import { WeeklyAdherenceCard } from '@/components/adherence/weekly-adherence-card';
import { BottomTabInset, Spacing } from '@/constants/theme';

const WEEK_DAYS: { letter: string; status: DayStatus }[] = [
  { letter: 'D', status: 'missed' },
  { letter: 'S', status: 'taken' },
  { letter: 'T', status: 'taken' },
  { letter: 'Q', status: 'today' },
  { letter: 'Q', status: 'pending' },
  { letter: 'S', status: 'pending' },
  { letter: 'S', status: 'pending' },
];

const PENDING_MEDICATIONS = [
  { icon: Pill, name: 'Medicamento A', subtitle: 'Uso contínuo' },
  { icon: Droplet, name: 'Tratamento B', subtitle: 'Temporário' },
];

const TAKEN_MEDICATIONS = [{ icon: Pill, name: 'Suplemento C', subtitle: 'Rotina' }];

export default function AdherenceScreen() {
  const [filter, setFilter] = React.useState<'pending' | 'taken'>('pending');

  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView ignores className on native — see app/index.tsx */}
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <AppHeader />
        <ScrollView
          className="flex-1"
          contentContainerClassName="gap-6 px-5 pt-6"
          showsVerticalScrollIndicator={false}
        >
          <VStack space="xs">
            <Heading size="2xl" className="text-primary">
              Adesão
            </Heading>
            <Text size="lg" className="text-muted-foreground">
              Acompanhamento contínuo
            </Text>
          </VStack>

          <WeeklyAdherenceCard adherencePercentage={92} days={WEEK_DAYS} />

          <HStack space="sm">
            <Button
              onPress={() => setFilter('pending')}
              variant={filter === 'pending' ? 'default' : 'outline'}
              className="h-12 flex-1 rounded-xl"
            >
              <ButtonText className="font-label text-base">Pendentes ({PENDING_MEDICATIONS.length})</ButtonText>
            </Button>
            <Button
              onPress={() => setFilter('taken')}
              variant={filter === 'taken' ? 'default' : 'outline'}
              className="h-12 flex-1 rounded-xl"
            >
              <ButtonText className="font-label text-base">Concluídos ({TAKEN_MEDICATIONS.length})</ButtonText>
            </Button>
          </HStack>

          <VStack space="md">
            {filter === 'pending'
              ? PENDING_MEDICATIONS.map((medication, index) => (
                  <MedicationCard key={medication.name} variant="pending" {...medication} index={index} />
                ))
              : TAKEN_MEDICATIONS.map((medication, index) => (
                  <MedicationCard key={medication.name} variant="taken" {...medication} index={index} />
                ))}
          </VStack>

          <Box style={{ height: BottomTabInset + Spacing.four }} />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
