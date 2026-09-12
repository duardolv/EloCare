import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { SpaIcon } from '@/components/shared/spa-icon';

export function AppHeader() {
  const useGlass = useMemo(() => isLiquidGlassAvailable(), []);

  return (
    <Box className="relative h-16 w-full flex-row items-center justify-between px-5">
      {useGlass ? (
        <GlassView style={StyleSheet.absoluteFill} glassEffectStyle="regular" />
      ) : (
        <Box className="absolute inset-0 bg-background shadow-sm" />
      )}

      <HStack space="sm" className="items-center">
        <Icon as={SpaIcon} size="xl" className="text-primary" />
        <Heading size="2xl" className="text-primary">
          EloCare
        </Heading>
      </HStack>

      <Pressable>
        <Avatar>
          <AvatarFallbackText>Família</AvatarFallbackText>
        </Avatar>
      </Pressable>
    </Box>
  );
}
