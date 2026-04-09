# Diagramme de cas d'utilisation — Ma Laverie

## Acteurs

- Utilisateur
- Gérant de laverie
- Administrateur

---

## Cas d'utilisation

### Utilisateur
- Consulter les laveries
- Voir les machines disponibles
- Consulter l'affluence
- Voir les tarifs
- Créer un compte
- Se connecter

### Gérant de laverie
- Mettre à jour l'état des machines
- Ajouter une laverie
- Modifier les informations

### Administrateur
- Gérer les utilisateurs
- Supprimer une laverie
- Superviser les données

---

## Relations

- Consulter les laveries <<include>> Voir les machines disponibles
- Consulter les laveries <<include>> Voir les tarifs
- Créer un compte <<extend>> Se connecter

---

## Description

L'application permet aux utilisateurs de consulter les informations des laveries afin d'organiser leur passage.

Les gérants peuvent mettre à jour les informations des laveries et des machines.

L'administrateur supervise l'ensemble du système et gère les utilisateurs.

---

## Diagramme UML

Le diagramme ci-dessous représente les interactions entre les acteurs et le système.

![Diagramme UML](ma-laverie-use-case.drawio.png)




