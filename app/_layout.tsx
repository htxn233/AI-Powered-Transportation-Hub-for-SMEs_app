import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen 
          name="pickup/[id]"
          options={{
            headerShown: true,
            headerTitle: 'Pickup Details',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen 
          name="delivery/[id]" 
          options={{
            headerShown: true,
            headerTitle: 'Delivery Details',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen 
          name="history/index" 
          options={{
            headerShown: true,
            headerTitle: 'Delivery History',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen 
          name="schedule/index" 
          options={{
            headerShown: true,
            headerTitle: 'Work Schedule',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen 
          name="settings/index" 
          options={{
            headerShown: true,
            headerTitle: 'Settings',
            headerBackTitle: 'Back',
          }}
        />
      </Stack>
    </>
  );
}