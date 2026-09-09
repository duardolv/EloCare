import { Sun } from 'lucide-react-native';
import React from 'react';

import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

export function DailyStatusCard() {
  return (
    <Card className="items-center gap-2 p-5">
      <Icon as={Sun} size="xl" className="mb-1 text-success" />
      <Heading size="xl" className="text-primary">
        Dia Tranquilo
      </Heading>
      <Text size="sm" className="max-w-[250px] text-center text-muted-foreground">
        Tudo parece estar seguindo seu ritmo natural. Um bom momento para uma mensagem de
        carinho.
      </Text>
    </Card>
  );
}
