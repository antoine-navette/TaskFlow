import { router, Stack, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useTaches } from "@/context/TachesContext";
import { COULEURS } from "@/styles/couleurs";

export default function DetailScreen() {
  const { id, titre } = useLocalSearchParams<{ id: string; titre: string }>();
  const { taches, basculerTache } = useTaches();
  const tache = taches.find((t) => t.id === id);

  return (
    <View style={styles.ecran}>
      <Stack.Screen options={{ title: titre }} />
      <Text style={styles.titre}>{titre}</Text>
      {tache && (
        <>
          <Text style={styles.categorie}>Catégorie : {tache.categorie}</Text>
          <Pressable style={styles.bouton} onPress={() => basculerTache(tache.id)}>
            <Text style={styles.boutonTexte}>{tache.terminee ? "Marquer à faire" : "Marquer terminée"}</Text>
          </Pressable>
        </>
      )}
      <Pressable onPress={() => router.back()}>
        <Text style={styles.retour}>Retour</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    gap: 12,
    padding: 16,
    backgroundColor: COULEURS.fond,
  },
  titre: {
    fontSize: 22,
    fontWeight: "bold",
    color: COULEURS.texte,
  },
  categorie: {
    color: COULEURS.texte,
  },
  bouton: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: COULEURS.primaire,
  },
  boutonTexte: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  retour: {
    textAlign: "center",
    color: COULEURS.muted,
  },
});
