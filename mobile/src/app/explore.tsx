import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { MaxContentWidth } from '@/constants/theme';

export default function ExploreScreen() {
  return (
    <Box className="flex-1 bg-background">
      <SafeAreaView className="flex-1 items-center justify-center px-4">
        <Box className="items-center gap-2" style={{ maxWidth: MaxContentWidth }}>
          <Heading size="2xl" className="text-foreground">
            Explore
          </Heading>
          <Text className="text-muted-foreground">Nothing here yet.</Text>
        </Box>
      </SafeAreaView>
    </Box>
  );
}
