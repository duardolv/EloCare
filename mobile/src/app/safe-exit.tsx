import { CircleUserRound, Info, Play, Square } from 'lucide-react-native';
import React from 'react';

import { AppHeader } from '@/components/shared/app-header';
import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';
import { StatusIndicator } from '@/components/safe-exit/status-indicator';

export default function SafeExitScreen() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView ignores className on native — see app/(tabs)/index.tsx */}
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <AppHeader
          right={
            <Pressable className="h-12 w-12 items-center justify-center rounded-full active:opacity-80">
              <Icon as={CircleUserRound} className="text-muted-foreground" />
            </Pressable>
          }
        />

        <Box className="flex-1 items-center justify-center gap-2 px-6">
          <StatusIndicator active={isActive} />

          <Heading size="2xl" className="mb-1 text-primary">
            Saída Segura
          </Heading>
          <Text size="xl" className="mb-2 max-w-xs text-center text-muted-foreground">
            {isActive ? 'O acompanhamento está ativo.' : 'O acompanhamento está desativado.'}
          </Text>

          <Card className="mb-10 max-w-sm flex-row gap-3 p-4">
            <Icon as={Info} className="mt-0.5 text-warning" />
            <Text size="lg" className="flex-1 text-foreground">
              Este modo fornece atualizações temporárias e proativas durante um trajeto. Você
              poderá encerrá-lo a qualquer momento.
            </Text>
          </Card>

          <Button
            onPress={() => setIsActive((current) => !current)}
            variant={isActive ? 'outline' : 'default'}
            className="h-14 w-full max-w-[320px] rounded-xl"
          >
            <ButtonIcon as={isActive ? Square : Play} />
            <ButtonText className="font-label text-base">
              {isActive ? 'Encerrar Modo Saída Segura' : 'Ativar Modo Saída Segura'}
            </ButtonText>
          </Button>
        </Box>
      </SafeAreaView>
    </Box>
  );
}
