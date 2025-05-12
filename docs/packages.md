# 📦 `package.json` – Documentation des dépendances

## 🎯 Objectif

Ce projet est un **portfolio personnel interactif** développé avec :

- **React 19**
- **Tailwind CSS**
- **Lenis** pour le scroll fluide
- **Framer Motion** pour les animations
- **Phaser** pour un mini-jeu intégré
- **TSParticles** pour les effets de particules

---

## 🧩 Dépendances principales (`dependencies`)

| Package                                 | Rôle                                              |
| --------------------------------------- | ------------------------------------------------- |
| `react`, `react-dom`                    | Librairie principale pour l’interface utilisateur |
| `@studio-freight/lenis`                 | Scroll fluide avec easing personnalisé            |
| `framer-motion`                         | Animations fluides dans les composants            |
| `lucide-react`                          | Pack d'icônes SVG moderne                         |
| `phaser`                                | Moteur de jeu utilisé pour le mini-jeu            |
| `react-hot-toast`                       | Notifications toast                               |
| `react-intersection-observer`           | Observer les éléments visibles à l'écran          |
| `react-tsparticles`, `tsparticles-slim` | Effets de particules légers et interactifs        |
| `swiper`                                | Slider/carrousel pour la section Portfolio        |
| `@tailwindcss/vite`                     | Intégration Tailwind avec Vite                    |

---

## 🛠️ Dépendances de développement (`devDependencies`)

| Package                                                    | Rôle                                             |
| ---------------------------------------------------------- | ------------------------------------------------ |
| `vite`                                                     | Bundler rapide pour le développement et la build |
| `typescript`                                               | Typage statique moderne                          |
| `tailwindcss`                                              | Utilitaires CSS                                  |
| `sass`                                                     | Prise en charge de SCSS                          |
| `autoprefixer`, `postcss`                                  | Compatibilité CSS étendue                        |
| `@vitejs/plugin-react`                                     | Support React pour Vite                          |
| `eslint`, `@eslint/js`                                     | Linting global                                   |
| `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` | Lint spécifique à React                          |
| `@types/react`, `@types/react-dom`                         | Typages TypeScript pour React                    |
| `typescript-eslint`                                        | Linting TypeScript                               |
| `globals`                                                  | Définitions globales pour ESLint                 |

---

## 🔧 Scripts

| Script    | Description                                  |
| --------- | -------------------------------------------- |
| `dev`     | Démarre le serveur de développement Vite     |
| `build`   | Compile TypeScript + génère le build de prod |
| `preview` | Affiche un aperçu local du build             |
| `lint`    | Analyse le code avec ESLint                  |

---

## 🚀 Lancer le projet

```bash
pnpm install
pnpm dev
