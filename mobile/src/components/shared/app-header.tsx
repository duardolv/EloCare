import { Flower2 } from 'lucide-react-native';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';

type AppHeaderProps = {
  align?: 'start' | 'center';
  right?: React.ReactNode;
  desktopNav?: React.ReactNode;
};

export function AppHeader({ align = 'start', right, desktopNav }: AppHeaderProps) {
  const logo = (
    <HStack space="sm" className="items-center">
      <Icon as={Flower2} size="xl" className="text-primary" />
      <Heading size="2xl" className="text-primary">
        EloCare
      </Heading>
    </HStack>
  );

  return (
    <Box className="h-16 w-full flex-row items-center justify-between bg-background px-5 shadow-sm">
      {align === 'center' ? (
        <>
          <Box className="w-8" />
          <Box className="absolute inset-x-0 items-center">{logo}</Box>
        </>
      ) : (
        logo
      )}

      {desktopNav}

      <Box>{right}</Box>
    </Box>
  );
}
