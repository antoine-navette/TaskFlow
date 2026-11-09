import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TacheCard from "@/components/TacheCard";
import { COULEURS } from "@/styles/couleurs";

type Tache = {
  id: number;
  titre: string;
  categorie: string;
  terminee: boolean;
};

const TACHES: Tache[] = [
  { id: 1, titre: "Créer la maquette", categorie: "Design", terminee: true },
  { id: 2, titre: "Installer Expo", categorie: "Setup", terminee: true },
  { id: 3, titre: "Composant TacheCard", categorie: "Dev", terminee: false },
  { id: 4, titre: "Écran d'accueil", categorie: "Dev", terminee: false },
  { id: 5, titre: "Tester sur téléphone", categorie: "QA", terminee: false },
];

export default function AccueilScreen() {
  return (
    <SafeAreaView style={styles.ecran}>
      <View style={styles.entete}>
        <Text style={styles.titre}>TaskFlow</Text>
        <Text style={styles.sousTitre}>Vos tâches du moment</Text>
      </View>
      <ScrollView contentContainerStyle={styles.liste}>
        {TACHES.map((tache) => (
          <TacheCard
            key={tache.id}
            titre={tache.titre}
            categorie={tache.categorie}
            terminee={tache.terminee}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
  },
  entete: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    gap: 4,
  },
  titre: {
    fontSize: 28,
    fontWeight: "bold",
    color: COULEURS.primaire,
  },
  sousTitre: {
    fontSize: 14,
    color: COULEURS.muted,
  },
  liste: {
    flexDirection: "column",
    gap: 12,
    padding: 16,
  },
});
