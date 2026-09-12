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
const PRESS_OPACITY = 0.8;
const STAGGER_MS = 40;
const ENTER_DISTANCE = 10;

export function usePressScale() {
  const reducedMotion = useReducedMotion();
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.get(),
    transform: [{ scale: scale.get() }],
  }));

  const onPressIn = useCallback(() => {
    if (reducedMotion) {
      opacity.set(PRESS_OPACITY);
    } else {
      scale.set(withSpring(PRESS_SCALE, springs.standard));
    }
  }, [reducedMotion, scale, opacity]);

  const onPressOut = useCallback(() => {
    if (reducedMotion) {
      opacity.set(1);
    } else {
      scale.set(withSpring(1, springs.standard));
    }
  }, [reducedMotion, scale, opacity]);

  return { style, onPressIn, onPressOut };
}

export function useEnterFade(index = 0) {
  const reducedMotion = useReducedMotion();
  const progress = useSharedValue(reducedMotion ? 1 : 0);

  useEffect(() => {
    if (reducedMotion) {
      progress.set(1);
      return;
    }
    progress.set(withDelay(index * STAGGER_MS, withSpring(1, springs.standard)));
    // `progress` is a stable Reanimated shared-value ref; only `index` and
    // `reducedMotion` should retrigger the entrance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, reducedMotion]);

  return useAnimatedStyle(() => ({
    opacity: progress.get(),
    transform: [{ translateY: (1 - progress.get()) * ENTER_DISTANCE }],
  }));
}
