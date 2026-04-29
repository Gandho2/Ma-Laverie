# Tests — Ma Laverie

## 1. Objectif des tests

Les tests permettent de vérifier que la fonctionnalité principale  fonctionne correctement.

Ils permettent également d'éviter les erreurs et de garantir la qualité de l'application.


## 2. Types de tests

### Tests unitaires (TU)

Les tests unitaires permettent de tester une partie précise du code

Dans notre cas on peut :

Vérifier qu'une machine libre peut être réservée
Vérifier qu'une machine occupée ne peut pas être réservée
Vérifier qu'une machine inexistante renvoie une erreur



### Tests d'intégration 

Les tests d'intégration permettent de tester le fonctionnement global du système.

Ils vérifient la communication entre :
- Frontend
- Backend
- Base de données

## 3. Cas de test

### Cas 1 : Réservation réussie

- Requête : POST /reservation
- Données : machineId = 1, userId = 1
- Condition : machine libre
- Résultat attendu : 
  - Code 200
  - Message "Réservation confirmée"


### Cas 2 : Machine occupée

- Requête : POST /reservation
- Données : machineId = 2
- Condition : machine déjà occupée
- Résultat attendu :
  - Code 400
  - Message "Machine déjà occupée"


### Cas 3 : Machine inexistante

- Requête : POST /reservation
- Données : machineId = 99
- Résultat attendu :
  - Code 404
  - Message "Machine non trouvée"

## 4. Outils utilisés

- Postman : pour envoyer des requêtes HTTP
- Navigateur : pour tester l'application


## 5. Importance des tests

- Permet de détecter les erreurs rapidement
- Améliore la qualité du code

## Résultat des tests

Les tests ont été exécutés avec succès.

- 2 tests réalisés
- 2 tests validés

Les résultats montrent que la fonctionnalité de réservation fonctionne correctement dans les cas normaux et en cas d'erreur.
- Assure le bon fonctionnement de l'application
- Facilite les évolutions futures
