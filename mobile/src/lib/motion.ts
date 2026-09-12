import { useCallback, useEffect } from 'react';
import {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

// Apple's damping-ratio/response vocabulary (WWDC "Designing Fluid
// Interfaces") maps directly onto Reanimated's duration-based spring
// config — no unit conversion needed.
export const springs = {
  // Critically damped, no overshoot. Default for all press/entrance motion.
  standard: { duration: 400, dampingRatio: 1 },
  // Slight bounce. Reserved for future gesture-driven work (flick/drag) —
  // not wired into anything yet since no such gesture exists in the app.
  momentum: { duration: 300, dampingRatio: 0.8 },
} as const;

const PRESS_SCALE = 0.97;
const STAGGER_MS = 40;
const ENTER_DISTANCE = 10;

export function usePressScale() {
  const reducedMotion = useReducedMotion();
  const scale = useSharedValue(1);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = useCallback(() => {
    if (!reducedMotion) scale.value = withSpring(PRESS_SCALE, springs.standard);
  }, [reducedMotion, scale]);

  const onPressOut = useCallback(() => {
    if (!reducedMotion) scale.value = withSpring(1, springs.standard);
  }, [reducedMotion, scale]);

  return { style, onPressIn, onPressOut };
}

export function useEnterFade(index = 0) {
  const reducedMotion = useReducedMotion();
  const progress = useSharedValue(reducedMotion ? 1 : 0);

  useEffect(() => {
    if (reducedMotion) {
      progress.value = 1;
      return;
    }
    progress.value = withDelay(index * STAGGER_MS, withSpring(1, springs.standard));
    // `progress` is a stable Reanimated shared-value ref; only `index` and
    // `reducedMotion` should retrigger the entrance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, reducedMotion]);

  return useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * ENTER_DISTANCE }],
  }));
}
