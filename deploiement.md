# Déploiement — Ma Laverie

## Objectif

Mettre l'application en ligne de manière simple et reproductible.

## Solution choisie

Utilisation de Docker pour garantir un environnement identique.

## Étapes

1. Création de l'image Docker
2. Lancement du conteneur
3. Exposition du port 3000

## Commandes

docker build -t ma-laverie .
docker run -p 3000:3000 ma-laverie

## Améliorations

- Déploiement sur un cloud 
- CI/CD avec GitHub Actions
