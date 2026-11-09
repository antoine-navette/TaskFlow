import { Link, Stack } from "expo-router";
import { Text } from "react-native";

import { COULEURS } from "@/styles/couleurs";

export default function TachesLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Retour" }}>
      <Stack.Screen
        name="index"
        options={{
          title: "TaskFlow",
          headerRight: () => (
            <Link href="/ajouter">
              <Text style={{ color: COULEURS.primaire, fontSize: 24 }}>+</Text>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="ajouter" options={{ title: "Nouvelle tâche" }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
