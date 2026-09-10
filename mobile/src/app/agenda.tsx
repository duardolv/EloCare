import { Brain, Microscope, Stethoscope, UserPlus, Users } from 'lucide-react-native';

import { AppHeader } from '@/components/shared/app-header';
import { AppointmentCard } from '@/components/agenda/appointment-card';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { VStack } from '@/components/ui/vstack';
import { BottomTabInset, Spacing } from '@/constants/theme';

export default function AgendaScreen() {
  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView ignores className on native — see app/index.tsx */}
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <AppHeader
          right={
            <Pressable className="h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-sm active:opacity-80">
              <Icon as={UserPlus} className="text-muted-foreground" />
            </Pressable>
          }
        />
        <ScrollView
          className="flex-1"
          contentContainerClassName="gap-4 px-5 pt-6"
          showsVerticalScrollIndicator={false}
        >
          <Heading size="xl">Próximos Compromissos</Heading>

          <VStack space="md">
            <AppointmentCard
              icon={Stethoscope}
              tone="primary"
              kind="Consulta"
              title="Cardiologista"
            />
            <AppointmentCard
              icon={Microscope}
              tone="warning"
              kind="Exame"
              title="Exames de Sangue - Rotina"
            />
            <AppointmentCard
              icon={Users}
              tone="accent"
              kind="Compromisso"
              title="Fisioterapia Semanal"
            />
            <AppointmentCard
              icon={Brain}
              tone="primary"
              kind="Consulta"
              title="Geriatra (Retorno)"
              faded
            />
          </VStack>

          <Box style={{ height: BottomTabInset + Spacing.four }} />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
