import {
  AtkinsonHyperlegibleNext_400Regular,
  AtkinsonHyperlegibleNext_400Regular_Italic,
  AtkinsonHyperlegibleNext_600SemiBold,
  AtkinsonHyperlegibleNext_700Bold,
  AtkinsonHyperlegibleNext_700Bold_Italic,
} from '@expo-google-fonts/atkinson-hyperlegible-next';
import { DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { AppColorMode } from '@/constants/theme';
import '@/global.css';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
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
        <AppTabs />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
