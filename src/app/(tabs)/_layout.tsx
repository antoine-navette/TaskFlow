import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

import { COULEURS } from "@/styles/couleurs";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: COULEURS.primaire, tabBarInactiveTintColor: COULEURS.muted }}>
      <Tabs.Screen
        name="(taches)"
        options={{
          title: "Tâches",
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="list" size={size} color={focused ? COULEURS.primaire : COULEURS.muted} />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="person" size={size} color={focused ? COULEURS.primaire : COULEURS.muted} />
          ),
        }}
      />
    </Tabs>
  );
}
