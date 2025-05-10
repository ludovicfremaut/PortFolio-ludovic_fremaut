# tech-stack.md — Explication des dépendances de mon portfolio

## Dépendances (dependencies)
Ces outils sont nécessaires **en production** (le site en ligne).

- **@tailwindcss/vite** : Intègre Tailwind CSS directement à Vite pour un chargement rapide et une compilation optimisée du CSS.
- **tailwindcss** : Framework CSS utilitaire. Il permet de styliser mon site en utilisant des classes prédéfinies (ex : `flex`, `text-center`, etc.).
- **framer-motion** : Librairie d'animations pour React. Tu l'utilises pour faire apparaître ou animer tes composants avec fluidité.
- **lucide-react** : Icônes modernes en React (tu l’utilises pour l’icône `Computer` dans ta navbar).
- **react** : Librairie principale pour construire l’interface (les composants, les hooks, etc.).
- **react-dom** : Permet de connecter React au DOM (à la page HTML réelle).
- **react-hot-toast** : Permet d’afficher facilement des notifications (ex : succès, erreur).
- **react-intersection-observer** : Détecte si un composant est visible à l’écran (ex : déclencher une animation quand une section entre dans le champ de vision).
- **swiper** : Librairie pour faire des sliders/carrousels responsives et stylés.

## Dépendances de développement (devDependencies)
Utilisées uniquement **pendant le développement** (pour compiler, vérifier ou améliorer ton code).

- **vite** : Outil de développement ultra-rapide pour projets React/TS.
- **@vitejs/plugin-react** : Plugin officiel React pour Vite, gère JSX.
- **typescript** : Superset de JavaScript qui ajoute le typage. Plus sécurisé et maintenable.
- **@types/react** / **@types/react-dom** : Aide TypeScript à comprendre le code React.
- **typescript-eslint** : Connecte TypeScript à ESLint pour vérifier la qualité du code TypeScript.
- **eslint** : Outil qui vérifie que ton code suit de bonnes pratiques (structure, erreurs, style).
- **@eslint/js** : Config de base pour ESLint avec les règles JavaScript standard.
- **eslint-plugin-react-hooks** : Ajoute des règles spécifiques aux hooks React (`useEffect`, etc.).
- **eslint-plugin-react-refresh** : Facilite le rechargement à chaud en React pendant le dev.
- **globals** : Fournit à ESLint les variables globales connues (comme `window`, `process`, etc.).
## 🎆 Particules de fond avec react-tsparticles

### 🎯 Objectif
Ajouter un **fond animé avec des symboles de code** (ex: `<`, `{`, `/`) pour dynamiser visuellement le portfolio.

### 🔧 Technologies utilisées
- `react-tsparticles` : composant React pour gérer les particules
- `tsparticles-slim` : version allégée pour de meilleures performances

### 🛠 Fonctionnement
Le composant `ParticlesBackground.tsx` utilise :
- Un fond sombre (`#0f172a`, comme `slate-900` en Tailwind)
- Des caractères typiques du code : `<`, `>`, `{`, `}`, `/`, `;`
- Des mouvements lents pour une ambiance discrète
- Un positionnement `fixed` en `zIndex: -1` pour que le fond reste en arrière-plan

### 🧱 Options principales utilisées
```js
particles: {
  number: { value: 30 }, // nombre de symboles visibles
  move: { enable: true, speed: 0.6 }, // mouvement lent
  opacity: { value: 0.5 }, // semi-transparent
  size: { value: 16 }, // taille moyenne
  color: { value: "#38bdf8" }, // cyan
  shape: {
    type: "char",
    character: {
      value: ["<", ">", "{", "}", "/", ";"],
      font: "Courier New",
    },
  },
}
```

### ✅ Résultat
Un fond élégant, discret, et cohérent avec l'identité visuelle de développeur.

