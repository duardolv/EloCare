import { Brain, Microscope, Stethoscope, Users } from 'lucide-react-native';

import { AppHeader } from '@/components/shared/app-header';
import { AppointmentCard } from '@/components/agenda/appointment-card';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { VStack } from '@/components/ui/vstack';
import { BottomTabInset, Spacing } from '@/constants/theme';

export default function AgendaScreen() {
  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView ignores className on native — see app/index.tsx */}
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <AppHeader />
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
              index={0}
            />
            <AppointmentCard
              icon={Microscope}
              tone="warning"
              kind="Exame"
              title="Exames de Sangue - Rotina"
              index={1}
            />
            <AppointmentCard
              icon={Users}
              tone="accent"
              kind="Compromisso"
              title="Fisioterapia Semanal"
              index={2}
            />
            <AppointmentCard
              icon={Brain}
              tone="primary"
              kind="Consulta"
              title="Geriatra (Retorno)"
              faded
              index={3}
            />
          </VStack>

          <Box style={{ height: BottomTabInset + Spacing.four }} />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
