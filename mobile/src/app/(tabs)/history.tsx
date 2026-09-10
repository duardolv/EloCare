import {
  CircleCheckBig,
  Circle,
  FileText,
  Folder,
  HeartPulse,
  PhoneCall,
  PillBottle,
  TestTube,
  TriangleAlert,
} from 'lucide-react-native';
import React from 'react';

import { AppHeader } from '@/components/shared/app-header';
import { ActionListItem } from '@/components/shared/action-list-item';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { DocumentTile } from '@/components/history/document-tile';
import { InfoListCard } from '@/components/history/info-list-card';
import { TimelineItem } from '@/components/history/timeline-item';
import { BottomTabInset, Spacing } from '@/constants/theme';

export default function HistoryScreen() {
  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView ignores className on native — see app/index.tsx */}
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <AppHeader />
        <ScrollView
          className="flex-1"
          contentContainerClassName="gap-8 px-5 pt-6"
          showsVerticalScrollIndicator={false}
        >
          <VStack space="xs">
            <Heading size="xl">Histórico de Dona Maria</Heading>
            <Text size="lg" className="text-muted-foreground">
              Resumo de saúde e registros recentes.
            </Text>
          </VStack>

          <VStack space="sm">
            <HStack space="sm">
              <InfoListCard
                icon={HeartPulse}
                tone="primary"
                title="Condições"
                items={['Hipertensão', 'Diabetes Tipo 2']}
              />
              <InfoListCard
                icon={TriangleAlert}
                tone="destructive"
                title="Alergias"
                items={['Penicilina', 'Amendoim']}
              />
            </HStack>

            <ActionListItem
              icon={PhoneCall}
              iconTone="accent"
              title="Dr. Carlos (Cardio)"
              subtitle="(11) 98765-4321"
              trailing={
                <Button size="sm" className="rounded-lg bg-muted">
                  <ButtonText className="font-label text-base text-primary">Ligar</ButtonText>
                </Button>
              }
            />
          </VStack>

          <VStack space="md">
            <Heading size="xl">Cofre de Documentos</Heading>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space="sm">
                <DocumentTile icon={PillBottle} tone="primary" label="Receitas" />
                <DocumentTile icon={TestTube} tone="accent" label="Exames" />
                <DocumentTile icon={FileText} tone="warning" label="Relatórios" />
                <DocumentTile icon={Folder} tone="muted" label="Outros" />
              </HStack>
            </ScrollView>
          </VStack>

          <VStack space="md">
            <Heading size="xl">Histórico Recente</Heading>
            <VStack space="lg">
              <TimelineItem
                tone="primary"
                title="Pressão Arterial"
                time="Hoje, 08:30"
                description="Medição registrada: 120/80 mmHg. Dentro da normalidade."
                tag={{ icon: CircleCheckBig, label: 'Aferido por Cuidador' }}
              />
              <TimelineItem
                tone="warning"
                title="Relato de Sintoma"
                time="Ontem, 19:15"
                description="Dona Maria relatou uma leve dor de cabeça após o jantar."
                tag={{ icon: Circle, label: 'Humor: Neutro' }}
              />
              <TimelineItem
                tone="primary"
                title="Medicação Administrada"
                time="Ontem, 08:00"
                description="Losartana 50mg administrada com sucesso."
                faded
              />
            </VStack>
          </VStack>

          <Box style={{ height: BottomTabInset + Spacing.four }} />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
