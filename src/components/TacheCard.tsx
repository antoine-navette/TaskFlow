import { StyleSheet, Text, View } from "react-native";

import { COULEURS } from "@/styles/couleurs";

type TacheCardProps = {
  titre: string;
  categorie: string;
  terminee: boolean;
};

export default function TacheCard({ titre, categorie, terminee }: TacheCardProps) {
  return (
    <View style={styles.carte}>
      <View style={styles.ligne}>
        <Text style={styles.titre}>{titre}</Text>
        <Text style={styles.badge}>{categorie}</Text>
      </View>
      <Text style={{ color: terminee ? "#3BA55C" : COULEURS.muted }}>
        {terminee ? "✓ Terminée" : "○ À faire"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  carte: {
    gap: 6,
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  ligne: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  titre: {
    flex: 1,
    fontWeight: "bold",
    color: COULEURS.texte,
  },
  badge: {
    paddingHorizontal: 8,
    borderRadius: 999,
    backgroundColor: COULEURS.accent,
    color: COULEURS.primaire,
    fontSize: 12,
  },
});
