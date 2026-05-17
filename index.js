const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

// ==============================
// CONNEXION BASE DE DONNÉES
// ==============================

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ma_laverie'
});

db.connect((err) => {
  if (err) {
    console.log("Erreur connexion BDD");
    console.error(err);
    return;
  }

  console.log("Connecté à MySQL");
});

// ==============================
// ROUTE PRINCIPALE
// ==============================

app.get('/', (req, res) => {
  res.send("API fonctionne");
});

// ==============================
// VOIR MACHINES (BDD)
// ==============================

app.get('/machines', (req, res) => {

  const sql = "SELECT * FROM machines";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json({
        message: "Erreur base de données"
      });
    }

    res.json(result);

  });

});

// ==============================
// RÉSERVER MACHINE
// ==============================

app.post('/reservation', (req, res) => {

  console.log(req.body);

  const { machineId, userId } = req.body;

  if (!machineId || !userId) {
    return res.status(400).json({
      message: "Données manquantes"
    });
  }

  // Vérifier si la machine existe
  const sqlCheck =
    "SELECT * FROM machines WHERE id = ?";

  db.query(sqlCheck, [machineId], (err, result) => {

    if (err) {
      return res.status(500).json({
        message: "Erreur base de données"
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Machine non trouvée"
      });
    }

    const machine = result[0];

    if (machine.etat === "occupée") {
      return res.status(400).json({
        message: "Machine déjà occupée"
      });
    }

    // Mettre la machine en occupée
    const sqlUpdate =
      "UPDATE machines SET etat = 'occupée' WHERE id = ?";

    db.query(sqlUpdate, [machineId], (err) => {

      if (err) {
        return res.status(500).json({
          message: "Erreur mise à jour machine"
        });
      }

      res.json({
        message: "Réservation confirmée"
      });

    });

  });

});

// ==============================
// LANCEMENT SERVEUR
// ==============================

app.listen(3000, () => {
  console.log("Serveur lancé");
});