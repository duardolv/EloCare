import { Check } from 'lucide-react-native';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { StatusPill } from '@/components/shared/status-pill';

type MedicationCardProps = {
  icon: React.ComponentProps<typeof Icon>['as'];
  name: string;
  subtitle: string;
  variant: 'pending' | 'taken';
};

export function MedicationCard({ icon, name, subtitle, variant }: MedicationCardProps) {
  const isTaken = variant === 'taken';

  return (
    <Box
      className={`flex-row items-center gap-4 overflow-hidden rounded-[20px] border border-border p-5 ${
        isTaken ? 'bg-card/50 opacity-75' : 'bg-card'
      }`}
    >
      <Box className={`absolute bottom-0 left-0 top-0 w-1.5 ${isTaken ? 'bg-success/40' : 'bg-warning'}`} />

      <Box
        className={`h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
          isTaken ? 'bg-success/10' : 'bg-muted'
        }`}
      >
        <Icon as={icon} size="xl" className={isTaken ? 'text-success' : 'text-foreground'} />
      </Box>

      <VStack className="flex-1">
        <Heading
          size="xl"
          className={isTaken ? 'text-foreground/80 line-through' : 'text-foreground'}
        >
          {name}
        </Heading>
        <Text size="sm" className="text-muted-foreground">
          {subtitle}
        </Text>
      </VStack>

      {isTaken ? (
        <Box className="h-8 w-8 items-center justify-center rounded-full bg-success">
          <Icon as={Check} size="sm" className="text-success-foreground" />
        </Box>
      ) : (
        <StatusPill tone="warning" label="Pendente" />
      )}
    </Box>
  );
}
