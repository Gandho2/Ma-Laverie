# Tests _  Ma Laverie

## Objectif

Vérifier que la fonctionnalité de réservation fonctionne correctement

## Tests unitaires

Test de la logique métier :

- Vérifier qu'une machine libre peut être réservée
- Vérifier qu'une machine occupée ne peut pas être réservée

## Tests d'intégration

Test de l'API :

1. Requête GET /machines/1 - retourne état machine
2. Requête POST /reservation avec machine libre - succès
3. Requête POST /reservation avec machine occupée - erreur

## Outils

- Postman
- Navigateur web
