#  Ma Laverie

##  Description
Ma Laverie est une application web qui permet aux utilisateurs de trouver facilement des laveries et de consulter la disponibilité des machines en temps réel.

Ce projet vise à répondre à un problème fréquent : ne pas savoir si une laverie est disponible avant de s’y rendre.

##  Objectifs
- Voir les laveries proches
- Vérifier la disponibilité des machines
- Réduire le temps d’attente
- Éviter les périodes de forte affluence
- Consulter les tarifs


## Utilisateurs cibles
- Étudiants
- Habitants urbains
- Personnes sans machine à laver


##  Technologies utilisées
- Frontend : HTML, CSS, JavaScript
- Backend : Node.js
- Base de données : MySQL 
- Conteneurisation : Docker
- CI/CD : GitHub Actions

## Structure du projet

- index.js : serveur backend simple
- Dockerfile : configuration du conteneur
- .github/workflows/ci.yml : pipeline CI
- cahier-des-charges.md : analyse du projet

##  Fonctionnement

Le projet contient un serveur Node.js simple qui retourne une liste de laveries avec leur état (libre ou occupée).

Ce projet est une première version (prototype) permettant de démontrer le fonctionnement global de l’application.


##  Installation et exécution

### 1. Cloner le projet
```bash
git clone https://github.com/gandho2/ma-laverie.git
cd ma-laverie
```bash
git clone https://github.com/ton-utilisateur/ma-laverie.git
cd ma-laverie
