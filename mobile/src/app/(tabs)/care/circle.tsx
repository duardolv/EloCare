import { CarTaxiFront, Pill, ShoppingCart } from 'lucide-react-native';
import React from 'react';

import { AppHeader } from '@/components/shared/app-header';
import { ActionListItem } from '@/components/shared/action-list-item';
import { StatusPill } from '@/components/shared/status-pill';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { FamilyBalanceCard } from '@/components/care/family-balance-card';
import { FamilyMemberCard } from '@/components/care/family-member-card';
import { BottomTabInset, Spacing } from '@/constants/theme';

export default function CareCircleScreen() {
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
            <Heading size="2xl" className="text-primary">
              Círculo de Cuidado
            </Heading>
            <Text size="lg" className="text-muted-foreground">
              Acompanhe a distribuição de tarefas e o bem-estar da rede de apoio.
            </Text>
          </VStack>

          <FamilyBalanceCard overloadPercentage={45} />

          <VStack space="lg">
            <Heading size="xl" className="text-primary">
              Membros Ativos
            </Heading>
            <HStack space="lg">
              <FamilyMemberCard name="João" relationship="Irmão" index={0} />
              <FamilyMemberCard name="Ana" relationship="Filha" index={1} />
              <FamilyMemberCard name="Pedro" relationship="Neto" index={2} />
            </HStack>
          </VStack>

          <VStack space="lg">
            <HStack className="items-center justify-between">
              <Heading size="xl" className="text-primary">
                Distribuição de Tarefas
              </Heading>
              <Button variant="link" size="sm">
                <ButtonText className="font-label text-base">Ver todas</ButtonText>
              </Button>
            </HStack>

            <VStack space="md">
              <ActionListItem
                icon={Pill}
                iconTone="accent"
                title="Organizar Remédios"
                titleWeight="semibold"
                subtitle="Atribuído a: João"
                trailing={<StatusPill label="Pendente" tone="neutral" />}
                index={0}
              />
              <ActionListItem
                icon={ShoppingCart}
                iconTone="muted"
                title="Compras da Semana"
                titleWeight="semibold"
                subtitle="Atribuído a: Ana"
                trailing={<StatusPill label="Concluído" tone="success" />}
                index={1}
              />
              <ActionListItem
                icon={CarTaxiFront}
                iconTone="muted"
                title="Acompanhar Consulta"
                titleWeight="semibold"
                subtitle="Atribuído a: Pedro"
                trailing={<StatusPill label="Agendado" tone="neutral" />}
                index={2}
              />
            </VStack>
          </VStack>

          <Box style={{ height: BottomTabInset + Spacing.four }} />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
