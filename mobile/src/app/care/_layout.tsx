import { Stack } from 'expo-router';

export default function CareLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="circle" />
      <Stack.Screen name="adherence" />
    </Stack>
  );
}
