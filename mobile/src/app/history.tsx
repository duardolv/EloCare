import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';

export default function HistoryScreen() {
  return (
    <Box className="flex-1 bg-background">
      {/* SafeAreaView ignores className on native — see app/index.tsx */}
      <SafeAreaView style={{ flex: 1 }}>
        <Box className="flex-1 items-center justify-center gap-2 px-4">
          <Heading size="2xl" className="text-foreground">
            Histórico
          </Heading>
          <Text className="text-muted-foreground">Ainda sem design de referência.</Text>
        </Box>
      </SafeAreaView>
    </Box>
  );
}
