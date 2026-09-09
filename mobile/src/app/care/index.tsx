import { Link } from 'expo-router';
import { ArrowLeft, Footprints, Heart, Moon } from 'lucide-react-native';
import React from 'react';

import { AppHeader } from '@/components/shared/app-header';
import { ActionListItem } from '@/components/shared/action-list-item';
import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { ObservationCard } from '@/components/care/observation-card';
import { RadarScoreRing } from '@/components/care/radar-score-ring';
import { BottomTabInset, Spacing } from '@/constants/theme';

export default function RadarScreen() {
  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView ignores className on native — see app/index.tsx */}
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <AppHeader align="center" />
        <ScrollView
          className="flex-1"
          contentContainerClassName="items-center gap-8 px-5 pt-4"
          showsVerticalScrollIndicator={false}
        >
          <VStack space="xs" className="items-center">
            <Heading size="xl">Radar Cotidiano</Heading>
            <Text size="lg" className="text-muted-foreground">
              Visão geral do bem-estar hoje.
            </Text>
          </VStack>

          <RadarScoreRing />

          <VStack space="lg" className="w-full">
            <HStack space="lg">
              <ObservationCard
                icon={Moon}
                label="Rotina"
                description="Noite tranquila relatada. Hábitos mantidos."
              />
              <ObservationCard
                icon={Footprints}
                label="Movimento"
                description="Atividade normal detectada pela manhã."
              />
            </HStack>

            <Link href="/care/circle" asChild>
              <ActionListItem
                icon={Heart}
                iconTone="primary"
                title="Círculo de Cuidado"
                subtitle="Veja a rede de apoio e as tarefas da família"
              />
            </Link>
          </VStack>

          <Link href="/" asChild>
            <Button variant="outline" className="h-12 w-full max-w-[280px] rounded-full bg-muted">
              <ButtonIcon as={ArrowLeft} className="text-primary" />
              <ButtonText className="font-label text-base text-primary">Voltar ao Início</ButtonText>
            </Button>
          </Link>

          <Box style={{ height: BottomTabInset + Spacing.four }} />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
