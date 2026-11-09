import { router } from "expo-router";
import { FlatList, StyleSheet, Text } from "react-native";

import TacheCard from "@/components/TacheCard";
import { useTaches } from "@/context/TachesContext";
import { COULEURS } from "@/styles/couleurs";

export default function AccueilScreen() {
  const { taches, supprimerTache } = useTaches();

  return (
    <FlatList
      style={styles.ecran}
      contentContainerStyle={styles.liste}
      data={taches}
      keyExtractor={(tache) => tache.id}
      renderItem={({ item }) => (
        <TacheCard
          titre={item.titre}
          categorie={item.categorie}
          terminee={item.terminee}
          onPress={() => router.push({ pathname: "/[id]", params: { id: item.id, titre: item.titre } })}
          onSupprimer={() => supprimerTache(item.id)}
        />
      )}
      ListEmptyComponent={<Text style={styles.vide}>Aucune tâche pour le moment.</Text>}
    />
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
  },
  liste: {
    flexDirection: "column",
    gap: 12,
    padding: 16,
  },
  vide: {
    textAlign: "center",
    color: COULEURS.muted,
  },
});
