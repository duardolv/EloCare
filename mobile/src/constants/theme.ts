import { Platform } from 'react-native';

/**
 * Raw color values for native APIs that can't take a className
 * (e.g. NativeTabs props). Keep in sync with the CSS tokens in
 * `global.css` — that file is the source of truth for the palette.
 */
export const Colors = {
  light: {
    text: '#24332F',
    background: '#FFFDF8',
    backgroundElement: '#EFEEEA',
    backgroundSelected: '#E6EEE7',
    textSecondary: '#5D6B67',
  },
  dark: {
    text: '#FFFDF8',
    background: '#16201D',
    backgroundElement: '#26302C',
    backgroundSelected: '#23332E',
    textSecondary: '#9BAAA4',
  },
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
