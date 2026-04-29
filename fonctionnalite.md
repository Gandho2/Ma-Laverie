# Fonctionnalité — Réservation de machine

## Contexte

Dans une laverie, les utilisateurs ne savent pas si une machine est disponible.

L'objectif de cette fonctionnalité est de permettre à un utilisateur de réserver une machine à distance afin d'éviter les déplacements inutiles.


## Description

La fonctionnalité permet à un utilisateur de réserver une machine si celle-ci est disponible.



## Fonctionnement détaillé

1. L'utilisateur sélectionne une machine depuis l'interface
2. Le frontend envoie une requête HTTP POST au backend (/reservation)
3. Le backend récupère les informations (machineId, userId)
4. Le backend vérifie si la machine existe
5. Le backend vérifie si la machine est disponible
6. Si la machine est libre :
   - l'état de la machine passe à "occupée"
   - une réservation est créée
7. Le backend renvoie une réponse au frontend
8. Le frontend affiche le résultat à l'utilisateur

## Gestion des erreurs

- Machine inexistante → erreur 404
- Machine occupée → erreur 400



## Résultat attendu

- Réservation réussie → message de confirmation
- Réservation refusée → message d'erreur
