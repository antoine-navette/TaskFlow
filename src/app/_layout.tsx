import { Stack } from "expo-router";

import { TachesProvider } from "@/context/TachesContext";

export default function RootLayout() {
  return (
    <TachesProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </TachesProvider>
  );
}
