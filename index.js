const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// ==============================
// MIDDLEWARES
// ==============================

app.use(cors());
app.use(express.json());

// ==============================
// CONNEXION MYSQL
// ==============================

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ma_laverie'
});

db.connect((err) => {
  if (err) {
    console.error(" Erreur connexion MySQL :", err);
    return;
  }

  console.log(" Connecté à MySQL");
});

// ==============================
// ROUTE PRINCIPALE
// ==============================

app.get('/', (req, res) => {
  res.send('API Ma Laverie fonctionne');
});

// ==============================
// VOIR LES MACHINES
// ==============================

app.get('/machines', (req, res) => {

  const sql = 'SELECT * FROM machines';

  db.query(sql, (err, result) => {

    if (err) {
      console.error(err);

      return res.status(500).json({
        message: 'Erreur base de données'
      });
    }

    res.status(200).json(result);

  });

});

// ==============================
// RÉSERVER UNE MACHINE
// ==============================

app.post('/reservation', (req, res) => {

  const { machineId, userId } = req.body;

  console.log(req.body);

  // Vérification données
  if (!machineId || !userId) {
    return res.status(400).json({
      message: 'Données manquantes'
    });
  }

  // Vérifier si machine existe
  const sqlCheck =
    'SELECT * FROM machines WHERE id = ?';

  db.query(sqlCheck, [machineId], (err, result) => {

    if (err) {
      console.error(err);

      return res.status(500).json({
        message: 'Erreur base de données'
      });
    }

    // Machine inexistante
    if (result.length === 0) {
      return res.status(404).json({
        message: 'Machine non trouvée'
      });
    }

    const machine = result[0];

    // Machine déjà occupée
    if (machine.etat === 'occupée') {
      return res.status(400).json({
        message: 'Machine déjà occupée'
      });
    }

    // Mise à jour état machine
    const sqlUpdate =
      "UPDATE machines SET etat = 'occupée' WHERE id = ?";

    db.query(sqlUpdate, [machineId], (err) => {

      if (err) {
        console.error(err);

        return res.status(500).json({
          message: 'Erreur mise à jour machine'
        });
      }

      // Réponse succès
      res.status(200).json({
        message: 'Réservation confirmée',
        machineId,
        userId
      });

    });

  });

});

// ==============================
// LIBÉRER UNE MACHINE
// ==============================

app.put('/machine/:id/liberer', (req, res) => {

  const machineId = req.params.id;

  // Vérifier si machine existe
  const sqlCheck =
    'SELECT * FROM machines WHERE id = ?';

  db.query(sqlCheck, [machineId], (err, result) => {

    if (err) {
      console.error(err);

      return res.status(500).json({
        message: 'Erreur base de données'
      });
    }

    // Machine inexistante
    if (result.length === 0) {
      return res.status(404).json({
        message: 'Machine non trouvée'
      });
    }

    // Libérer machine
    const sqlUpdate =
      "UPDATE machines SET etat = 'libre' WHERE id = ?";

    db.query(sqlUpdate, [machineId], (err) => {

      if (err) {
        console.error(err);

        return res.status(500).json({
          message: 'Erreur mise à jour machine'
        });
      }

      res.status(200).json({
        message: 'Machine libérée avec succès',
        machineId
      });

    });

  });

});

// ==============================
// LANCEMENT SERVEUR
// ==============================

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});