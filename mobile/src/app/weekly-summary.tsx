import {
  CalendarDays,
  CircleCheckBig,
  Lightbulb,
  Pill,
  Sparkles,
  Sun,
  Thermometer,
  TrendingUp,
  Users,
} from 'lucide-react-native';
import React from 'react';

import { AppHeader } from '@/components/shared/app-header';
import { StatusPill } from '@/components/shared/status-pill';
import { Avatar, AvatarFallbackText, AvatarGroup } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { AlertCard } from '@/components/weekly-summary/alert-card';
import { InsightCard } from '@/components/weekly-summary/insight-card';
import { TrendRow } from '@/components/weekly-summary/trend-row';
import { BottomTabInset, Spacing } from '@/constants/theme';

export default function WeeklySummaryScreen() {
  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView ignores className on native — see app/(tabs)/index.tsx */}
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <AppHeader />
        <ScrollView
          className="flex-1"
          contentContainerClassName="gap-8 px-5 pt-6"
          showsVerticalScrollIndicator={false}
        >
          <VStack space="xs">
            <Heading size="2xl" className="text-primary">
              Resumo da Semana
            </Heading>
            <Text size="lg" className="text-muted-foreground">
              Dona Maria - 12 a 18 de Outubro
            </Text>
          </VStack>

          <VStack space="md">
            <HStack space="sm" className="items-center">
              <Icon as={Lightbulb} className="text-warning" />
              <Heading size="xl">Atenção</Heading>
            </HStack>

            <VStack space="sm">
              <AlertCard
                icon={Thermometer}
                tone="destructive"
                tagLabel="Prioridade"
                description="Variação de temperatura reportada na quarta-feira (37.8°C). Recomendado verificar hoje."
                index={0}
              />
              <AlertCard
                icon={Pill}
                tone="warning"
                tagLabel="Rotina"
                description="O Losartana está acabando em aproximadamente 4 dias."
                index={1}
              />
            </VStack>
          </VStack>

          <VStack space="md">
            <HStack space="sm" className="items-center">
              <Icon as={Sparkles} className="text-primary" />
              <Heading size="xl">Análise EloCare</Heading>
            </HStack>
            <Text size="sm" className="italic text-muted-foreground">
              Resumo gerado para facilitar o acompanhamento. Não substitui orientação médica.
            </Text>

            <VStack space="sm">
              <InsightCard
                icon={Sun}
                tone="accent"
                title="Bem-estar"
                description={
                  'Semana geralmente positiva. Relatou sentir-se "muito bem" em 5 dos 7 dias. O sono pareceu tranquilo, com média de 7.5h.'
                }
                index={0}
              >
                <TrendRow icon={TrendingUp} label="Estável e positivo" />
              </InsightCard>

              <InsightCard
                icon={Pill}
                tone="primary"
                title="Medicamentos"
                description="Adesão de 100% registrada esta semana. Todas as doses de Losartana e Metformina foram marcadas no horário correto."
                index={1}
              >
                <TrendRow icon={CircleCheckBig} label="Rotina perfeita" />
              </InsightCard>

              <InsightCard
                icon={CalendarDays}
                tone="warning"
                title="Agenda"
                description="Compareceu à consulta de rotina com Dr. Silva. Fisioterapia realizada 2 vezes conforme programado."
                index={2}
              >
                <StatusPill tone="neutral" size="xs" label="Próx: Cárdio dia 24" />
              </InsightCard>

              <InsightCard
                icon={Users}
                tone="success"
                title="Cuidado"
                description="João visitou no domingo. Ligação de vídeo com a neta na terça-feira. Interação social regular mantida."
                index={3}
              >
                <AvatarGroup>
                  <Avatar className="h-8 w-8">
                    <AvatarFallbackText>J</AvatarFallbackText>
                  </Avatar>
                  <Avatar className="h-8 w-8">
                    <AvatarFallbackText>A</AvatarFallbackText>
                  </Avatar>
                </AvatarGroup>
              </InsightCard>
            </VStack>
          </VStack>

          <Box style={{ height: BottomTabInset + Spacing.four }} />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
