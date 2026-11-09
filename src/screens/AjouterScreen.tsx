import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useTaches } from "@/context/TachesContext";
import { COULEURS } from "@/styles/couleurs";

export default function AjouterScreen() {
  const { ajouterTache } = useTaches();
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState("");

  function ajouter() {
    if (!titre.trim() || !categorie.trim()) return;
    ajouterTache(titre.trim(), categorie.trim());
    router.back();
  }

  return (
    <View style={styles.ecran}>
      <TextInput style={styles.champ} placeholder="Titre de la tâche" value={titre} onChangeText={setTitre} />
      <TextInput style={styles.champ} placeholder="Catégorie" value={categorie} onChangeText={setCategorie} />
      <Pressable style={styles.bouton} onPress={ajouter}>
        <Text style={styles.boutonTexte}>Ajouter la tâche</Text>
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
  champ: {
    padding: 10,
    borderWidth: 1,
    borderColor: COULEURS.muted,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
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
});
