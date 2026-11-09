import { StyleSheet, Text, View } from "react-native";

import { useTaches } from "@/context/TachesContext";
import { COULEURS } from "@/styles/couleurs";

const PRENOM = "Antoine";
const NOM = "Navette";

export default function ProfilScreen() {
  const { taches } = useTaches();
  const terminees = taches.filter((tache) => tache.terminee).length;

  return (
    <View style={styles.ecran}>
      <View style={styles.avatar}>
        <Text style={styles.initiales}>
          {PRENOM[0]}
          {NOM[0]}
        </Text>
      </View>
      <Text style={styles.nom}>
        {PRENOM} {NOM}
      </Text>
      <Text style={styles.stats}>
        {terminees} tâches terminées sur {taches.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    alignItems: "center",
    gap: 4,
    paddingTop: 32,
    backgroundColor: COULEURS.fond,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    backgroundColor: COULEURS.accent,
  },
  initiales: {
    fontSize: 24,
    fontWeight: "bold",
    color: COULEURS.primaire,
  },
  nom: {
    fontWeight: "bold",
    color: COULEURS.texte,
  },
  stats: {
    color: COULEURS.muted,
  },
});
