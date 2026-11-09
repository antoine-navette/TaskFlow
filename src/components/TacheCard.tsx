import { Pressable, StyleSheet, Text, View } from "react-native";

import { COULEURS } from "@/styles/couleurs";

type TacheCardProps = {
  titre: string;
  categorie: string;
  terminee: boolean;
  onPress: () => void;
  onSupprimer: () => void;
};

export default function TacheCard({ titre, categorie, terminee, onPress, onSupprimer }: TacheCardProps) {
  return (
    <Pressable style={styles.carte} onPress={onPress}>
      <View style={styles.ligne}>
        <Text style={styles.titre}>{titre}</Text>
        <Text style={styles.badge}>{categorie}</Text>
      </View>
      <View style={styles.ligne}>
        <Text style={{ color: terminee ? "#3BA55C" : COULEURS.muted }}>
          {terminee ? "✓ Terminée" : "○ À faire"}
        </Text>
        <Pressable onPress={onSupprimer} hitSlop={8}>
          <Text style={styles.supprimer}>Supprimer</Text>
        </Pressable>
      </View>
    </Pressable>
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
  supprimer: {
    color: "#D64545",
  },
});
