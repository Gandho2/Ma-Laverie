const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ==============================
// DONNÉES
// ==============================

let machines = [
  { id: 1, etat: "libre" },
  { id: 2, etat: "occupée" }
];

let reservations = [];

// ==============================
// ROUTE PRINCIPALE
// ==============================

app.get('/', (req, res) => {
  res.send("API fonctionne");
});

// ==============================
// VOIR MACHINES
// ==============================

app.get('/machines', (req, res) => {
  res.json(machines);
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

  const machine = machines.find(
    m => m.id == machineId
  );

  if (!machine) {
    return res.status(404).json({
      message: "Machine non trouvée"
    });
  }

  if (machine.etat === "occupée") {
    return res.status(400).json({
      message: "Machine déjà occupée"
    });
  }

  machine.etat = "occupée";

  reservations.push({
    machineId,
    userId
  });

  res.json({
    message: "Réservation confirmée"
  });

});

// ==============================
// LANCEMENT SERVEUR
// ==============================

app.listen(3000, () => {
  console.log("Serveur lancé");
}); 