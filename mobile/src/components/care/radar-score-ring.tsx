import { CircleCheckBig } from 'lucide-react-native';
import React from 'react';
import Animated, { useReducedMotion } from 'react-native-reanimated';

import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';

const PULSE_KEYFRAMES = {
  '0%': { transform: [{ scale: 0.98 }] },
  '70%': { transform: [{ scale: 1 }] },
  '100%': { transform: [{ scale: 0.98 }] },
};

type RadarScoreRingProps = {
  label?: string;
};

export function RadarScoreRing({ label = 'Estável' }: RadarScoreRingProps) {
  const reducedMotion = useReducedMotion();

  return (
    <Box className="h-64 w-64 items-center justify-center">
      <Box className="absolute -inset-3 rounded-full border border-success/20" />
      <Box className="absolute inset-0 rounded-full border border-success/40" />
      <Animated.View
        style={
          reducedMotion
            ? undefined
            : {
                animationName: PULSE_KEYFRAMES,
                animationDuration: '4s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
              }
        }
      >
        <Box className="h-48 w-48 items-center justify-center rounded-full border-4 border-success/20 bg-card shadow-lg">
          <Icon as={CircleCheckBig} size="xl" className="mb-2 text-success" />
          <Heading size="xl" className="tracking-wide text-primary">
            {label}
          </Heading>
        </Box>
      </Animated.View>
    </Box>
  );
}
