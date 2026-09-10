import { TrendingUp } from 'lucide-react-native';
import React from 'react';

import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { DayStatus, DayStatusDot } from '@/components/adherence/day-status-dot';
import { StatusPill } from '@/components/shared/status-pill';

type DayEntry = {
  letter: string;
  status: DayStatus;
};

type WeeklyAdherenceCardProps = {
  adherencePercentage: number;
  days: DayEntry[];
};

export function WeeklyAdherenceCard({ adherencePercentage, days }: WeeklyAdherenceCardProps) {
  return (
    <Card className="gap-6 p-6">
      <HStack className="items-center justify-between">
        <Heading size="xl">Histórico Semanal</Heading>
        <StatusPill
          tone="success"
          size="md"
          label={`${adherencePercentage}%`}
          icon={TrendingUp}
        />
      </HStack>

      <HStack className="justify-between">
        {days.map((day, index) => (
          <DayStatusDot key={`${day.letter}-${index}`} letter={day.letter} status={day.status} />
        ))}
      </HStack>
    </Card>
  );
}
