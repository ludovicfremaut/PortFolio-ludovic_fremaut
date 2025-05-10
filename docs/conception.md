## 🧠 Démarche et conception du portfolio

### 🎯 Objectif
Créer un portfolio personnel moderne et interactif pour :
- Présenter mes compétences de développeur (React, TypeScript, Tailwind, etc.)
- Mettre en avant mes projets
- Ajouter une touche originale avec un mini-jeu et un fond animé

---

### 🧱 Architecture choisie
- **React 19** : pour créer une SPA fluide et modulaire
- **Vite** : pour un démarrage rapide, du hot reload et un build ultra-performant
- **TypeScript** : pour sécuriser le code et mieux structurer les composants
- **Tailwind CSS** : pour un style rapide, responsive et cohérent
- **Framer Motion** : pour des animations modernes, douces et accessibles

---

### ✨ Éléments interactifs et originaux

#### 🎮 Mini-jeu "Attrape les erreurs" ( aide avec IA ) 
- Construit avec **Phaser.js** (intégré dans React via `useEffect`)
- But : cliquer sur des icônes de bugs/dev (bug, warning, error...)
- Compte à rebours de 30 secondes
- Score final affiché + bouton React pour rejouer proprement
- Permet de démontrer mes compétences en intégration de librairies externes

#### 🎆 Fond animé dynamique ( inspiration d un autre portfolio )
- Réalisé avec **react-tsparticles** et **tsparticles-slim**
- Particules animées en caractères de code (`<`, `>`, `{`, `;`, etc.)
- Fond sombre pour un meilleur contraste et style développeur

---

### 🧩 Navigation
- **Navbar animée** avec Framer Motion
- Liens dynamiques générés à partir d’un tableau (`map`) pour éviter la redondance
- Responsive et fixe en haut de page

---

### 🔍 Accessibilité et bonnes pratiques
- Utilisation de couleurs contrastées (textes clairs sur fond sombre)
- Taille des textes et boutons adaptée au desktop
- Pas de dépendances inutiles : choix volontaire de `tsparticles-slim` pour alléger le fond

---
