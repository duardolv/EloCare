import React from 'react';

import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { SpaIcon } from '@/components/shared/spa-icon';

export function AppHeader() {
  return (
    <Box className="h-16 w-full flex-row items-center justify-between bg-background px-5 shadow-sm">
      <HStack space="sm" className="items-center">
        <Icon as={SpaIcon} size="xl" className="text-primary" />
        <Heading size="2xl" className="text-primary">
          EloCare
        </Heading>
      </HStack>

      <Pressable className="active:opacity-80">
        <Avatar>
          <AvatarFallbackText>Família</AvatarFallbackText>
        </Avatar>
      </Pressable>
    </Box>
  );
}
