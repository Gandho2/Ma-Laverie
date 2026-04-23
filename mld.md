MLD — Ma Laverie

## Table Laverie
id_laverie (cle primaire)
nom
adresse
ville

## Table Utilisateur
id_user (PK)
email
mot_de_passe
role

## Table Machine
id_machine (PK)
type
etat
id_laverie (FK)

## Table Reservation
id_reservation (PK)
date
heure
id_user (FK)
id_machine (FK)

## Table Tarif
id_tarif (PK)
type_machine
prix




