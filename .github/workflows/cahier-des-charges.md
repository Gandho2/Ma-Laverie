# Cahier des charges — Ma Laverie

## 1. Contexte
Dans les grandes villes comme Bruxelles, les laveries automatiques sont très utilisées, notamment par les étudiants et les personnes vivant en appartement.

Cependant, ces laveries ne disposent pas de système numérique permettant de connaître l’état des machines en temps réel ( les horaires d'ouverture, de fermeture, les machines disponibles...)

## 2. Problématique
Les utilisateurs rencontrent plusieurs problèmes :
- déplacement inutile lorsque les machines sont occupées
- perte de temps importante
- absence d'information sur les tarifs
- aucune visibilité sur les heures d'affluence

## 3. Solution proposée
Développement d’une application web permettant :
- de localiser les laveries
- de consulter la disponibilité des machines
- de visualiser le taux d’affluence
- d’accéder aux tarifs

## 4. Besoins fonctionnels
- afficher une liste de laveries
- afficher le statut des machines
- afficher les informations pratiques
- permettre à un utilisateur de consulter les données

## 5. Besoins non fonctionnels
- application rapide
- interface simple
- sécurité des données
- respect du RGPD

## 6. Utilisateurs
- étudiants
- habitants urbains
- personnes sans machine à laver

## 7. Contraintes techniques
- utilisation de Docker
- mise en place d’un pipeline CI
- backend en Node.js
- base de données MySQL

## 8. Architecture
- frontend : HTML, CSS, JavaScript
- backend : Node.js
- base de données : MySQL

## 9. Évolutions possibles
- application mobile
- notifications
- réservation de machine MYSQL
- 
- GitHub   Actions
