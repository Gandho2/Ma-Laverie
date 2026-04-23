## Protection des mots de passe

Les mots de passe ne sont pas stockés en clair.

Ils sont chiffrés (hashés) avant d’être enregistrés dans la base de données à l’aide d’une bibliothèque comme bcrypt.

Cela permet d’éviter qu’un mot de passe soit lisible en cas de fuite de données.

---

## Respect du RGPD

Le respect du RGPD est assuré par :

- Limitation des données collectées (seulement les données nécessaires)
- Possibilité pour l’utilisateur de supprimer son compte
- Protection des données personnelles
- Information de l’utilisateur sur l’utilisation de ses données

---

## Sécurité des formulaires

Les données saisies par l’utilisateur sont vérifiées :

- Vérification des champs (email valide, mot de passe sécurisé)
- Protection contre les injections SQL
- Nettoyage des entrées utilisateur
