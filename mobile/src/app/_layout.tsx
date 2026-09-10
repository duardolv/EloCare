import {
  AtkinsonHyperlegibleNext_400Regular,
  AtkinsonHyperlegibleNext_400Regular_Italic,
  AtkinsonHyperlegibleNext_600SemiBold,
  AtkinsonHyperlegibleNext_700Bold,
  AtkinsonHyperlegibleNext_700Bold_Italic,
} from '@expo-google-fonts/atkinson-hyperlegible-next';
import { DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { AppColorMode } from '@/constants/theme';
import '@/global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    AtkinsonHyperlegibleNext_400Regular,
    AtkinsonHyperlegibleNext_400Regular_Italic,
    AtkinsonHyperlegibleNext_600SemiBold,
    AtkinsonHyperlegibleNext_700Bold,
    AtkinsonHyperlegibleNext_700Bold_Italic,
  });

  // native splash stays up (see SplashScreen.preventAutoHideAsync above) until
  // AnimatedSplashOverlay mounts and hides it, so gating the mount here also
  // gates the splash — keep going on fontError instead of hanging forever.
  if (!fontsLoaded && !fontError) return null;

  return (
    <GluestackUIProvider mode={AppColorMode}>
      <ThemeProvider value={DefaultTheme}>
        <AnimatedSplashOverlay />
        {/* (tabs) owns the native tab bar; these three are pushed on top of
            it from Início rows, so they need to live outside that navigator. */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="safe-exit" />
          <Stack.Screen name="diary" />
          <Stack.Screen name="weekly-summary" />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
