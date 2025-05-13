# Plan d'intégration : envoi de mail & déploiement

## Objectif

Mettre en place un système d’envoi d’e-mails fonctionnel depuis le formulaire de contact du portfolio, avec gestion côté serveur (via une API), tests en local (Docker), puis déploiement.

---

## Étapes prévues

### 1. Mise en place du backend API
- Créer un service minimal (Node.js, Express ou autre) dédié à la réception des formulaires.
- Configurer une route POST `/contact` pour recevoir les données.
- Ajouter les validations côté serveur.

### 2. Envoi d’e-mail
- Utiliser **Nodemailer** avec un SMTP (par exemple Mailtrap, Gmail, ou service pro comme Sendinblue).
- Masquer les identifiants avec dotenv.
- Tester un envoi automatique depuis les données du formulaire.

### 3. Test via Docker
- Dockeriser le service mail (Dockerfile + docker-compose).
- Simuler l’envoi localement avec un outil comme **MailDev** ou **Mailhog** pour intercepter les e-mails sans les envoyer réellement.

### 4. Connexion frontend-backend
- Depuis le formulaire React, utiliser `fetch` ou `axios` pour envoyer les données vers l’API.
- Ajouter un retour visuel (toast ou message) selon le succès ou l’échec de l’envoi.

### 5. Sécurité minimale
- Ajout d’un petit **rate limiting** sur l’API de contact.
- Prévoir une **vérification basique anti-bot** (ex. honeypot ou Google reCAPTCHA plus tard).

### 6. Déploiement
- Héberger le backend (Railway, Render, Vercel Edge Functions...).
- Tester les envois sur serveur distant.
- Redéployer le frontend si nécessaire pour pointer vers l’URL de prod.

---

## Bonus (si temps dispo)
- Sauvegarde des messages en base de données.
- Interface admin pour lire les messages (projet futur).

---

## Matériel prêt

✅ Formulaire de contact fonctionnel côté frontend  
✅ Projet structuré, scroll fluide, formulaire stable  
⏳ Manque juste le lien réel vers un serveur d’envoi

---

## Objectif final

> À la soumission du formulaire, recevoir un e-mail contenant les infos (nom, mail, message) dans une boîte de réception (ou simulateur) avec un retour de succès côté utilisateur.

---


