const express = require('express');
const app = express();

app.use(express.json());

// simulation base de données
let machines = [
  { id: 1, etat: "libre" },
  { id: 2, etat: "occupée" }
];

let reservations = [];

// vérifier machine
app.get('/machines/:id', (req, res) => {
  const machine = machines.find(m => m.id == req.params.id);
  res.json(machine);
});

// réserver
app.post('/reservation', (req, res) => {
  const { machineId, userId } = req.body;

  const machine = machines.find(m => m.id == machineId);

  if (!machine) {
    return res.status(404).json({ message: "Machine non trouvée" });
  }

  if (machine.etat === "occupée") {
    return res.status(400).json({ message: "Machine déjà occupée" });
  }

  machine.etat = "occupée";

  const reservation = {
    id: reservations.length + 1,
    machineId,
    userId
  };

  reservations.push(reservation);

  res.status(200).json({
    message: "Réservation confirmée",
    reservation
  });
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});