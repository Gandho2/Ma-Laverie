CREATE TABLE Laverie (
  id_laverie INT PRIMARY KEY,
  nom VARCHAR(100),
  adresse VARCHAR(255),
  ville VARCHAR(100)
);

CREATE TABLE Utilisateur (
  id_user INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  mot_de_passe VARCHAR(255),
);

CREATE TABLE Machine (
  id_machine INT PRIMARY KEY,
  type VARCHAR(50),
  etat VARCHAR(50),
  id_laverie INT,
  FOREIGN KEY (id_laverie) REFERENCES Laverie(id_laverie)
);

CREATE TABLE Tarif (
  id_tarif INT PRIMARY KEY,
  type_machine VARCHAR(50),
  prix DECIMAL(5,2)
);

CREATE TABLE Reservation (
  id_reservation INT PRIMARY KEY,
  date DATE,
  heure TIME,
  id_user INT,
  id_machine INT,
  FOREIGN KEY (id_user) REFERENCES Utilisateur(id_user),
  FOREIGN KEY (id_machine) REFERENCES Machine(id_machine)
);
  



