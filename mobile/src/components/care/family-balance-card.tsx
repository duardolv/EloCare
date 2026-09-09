import { Scale } from 'lucide-react-native';
import React from 'react';

import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { StatusPill } from '@/components/shared/status-pill';

type FamilyBalanceCardProps = {
  overloadPercentage: number;
};

export function FamilyBalanceCard({ overloadPercentage }: FamilyBalanceCardProps) {
  return (
    <Card className="gap-4 p-6">
      <HStack className="items-center justify-between">
        <HStack space="sm" className="items-center">
          <Icon as={Scale} className="text-warning" />
          <Heading size="xl">Equilíbrio Familiar</Heading>
        </HStack>
        <StatusPill label="Estável" tone="neutral" />
      </HStack>

      <VStack space="md">
        <HStack className="justify-between">
          <Text size="lg" className="text-muted-foreground">
            Sobrecarga da Rede
          </Text>
          <Text size="lg" className="text-muted-foreground">
            {overloadPercentage}%
          </Text>
        </HStack>

        <Progress value={overloadPercentage} className="h-3 bg-muted">
          <ProgressFilledTrack className="bg-primary/50" />
        </Progress>

        <Text size="sm" className="text-muted-foreground">
          A distribuição de tarefas está equilibrada nesta semana.
        </Text>
      </VStack>
    </Card>
  );
}
