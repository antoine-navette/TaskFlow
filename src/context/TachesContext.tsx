import { createContext, useContext, useState, type ReactNode } from "react";

export type Tache = {
  id: string;
  titre: string;
  categorie: string;
  terminee: boolean;
};

type TachesContextValue = {
  taches: Tache[];
  ajouterTache: (titre: string, categorie: string) => void;
  basculerTache: (id: string) => void;
  supprimerTache: (id: string) => void;
};

const TachesContext = createContext<TachesContextValue | null>(null);

export function TachesProvider({ children }: { children: ReactNode }) {
  const [taches, setTaches] = useState<Tache[]>([
    { id: "1", titre: "Créer la maquette", categorie: "Design", terminee: true },
    { id: "2", titre: "Installer Expo", categorie: "Setup", terminee: true },
    { id: "3", titre: "Composant TacheCard", categorie: "Dev", terminee: false },
    { id: "4", titre: "Écran d'accueil", categorie: "Dev", terminee: false },
    { id: "5", titre: "Tester sur téléphone", categorie: "QA", terminee: false },
  ]);

  function ajouterTache(titre: string, categorie: string) {
    const nouvelle: Tache = { id: Date.now().toString(), titre, categorie, terminee: false };
    setTaches((precedentes) => [...precedentes, nouvelle]);
  }

  function basculerTache(id: string) {
    setTaches((precedentes) =>
      precedentes.map((tache) => (tache.id === id ? { ...tache, terminee: !tache.terminee } : tache)),
    );
  }

  function supprimerTache(id: string) {
    setTaches((precedentes) => precedentes.filter((tache) => tache.id !== id));
  }

  return (
    <TachesContext.Provider value={{ taches, ajouterTache, basculerTache, supprimerTache }}>
      {children}
    </TachesContext.Provider>
  );
}

export function useTaches() {
  const contexte = useContext(TachesContext);
  if (!contexte) {
    throw new Error("useTaches doit être utilisé dans un TachesProvider");
  }
  return contexte;
}
