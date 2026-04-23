# Architecture — Ma Laverie

## 1. Type d'architecture

L'application Ma Laverie utilise une architecture client serveur.

Elle est composée de trois parties principales :

- Frontend (client)
- Backend (serveur)
- Base de données



## 2. Description des composants

### Frontend

Le frontend correspond à l'interface utilisateur.

Technologies utilisées :
- HTML
- CSS
- JavaScript

Rôle :
Afficher les laveries
Permettre à l'utilisateur de consulter les machines
Envoyer des requêtes au backend (API)


### Backend

Le backend est développé avec Node.js et Express.

Rôle :
Recevoir les requêtes du frontend
Traiter la logique métier (ex : réservation)
 Vérifier l'état des machines
Envoyer des réponses au frontend

Exemple :
- Vérifier si une machine est disponible
- Créer une réservation



### Base de données

Actuellement, les données sont simulées en mémoire .

Les Données stockées sont :
- Machines (id, état)
- Réservations (id, machineId, userId)

Évolution possible :
- Utilisation d'une base de données réelle (MySQL, PostgreSQL)


## 3. Flux de fonctionnement

1. L'utilisateur clique sur "Réserver"
2. Le frontend envoie une requête HTTP au backend
3. Le backend vérifie la disponibilité de la machine
4. Si la machine est libre → création de la réservation
5. Le backend renvoie une réponse au frontend
6. Le frontend affiche le résultat à l'utilisateur


## 4. Avantages de cette architecture

- Séparation claire des responsabilités
- Code plus organisé
- Facilité de maintenance
- Possibilité d'évolution (mobile, API, etc.)


## 5. Sécurité

- Validation des données côté backend
- Vérification de l'état des machines
- Gestion des erreurs

Améliorations futures :
- Authentification utilisateur (JWT)
- Hash des mots de passe
- Protection contre les attaques (XSS, SQL injection)


