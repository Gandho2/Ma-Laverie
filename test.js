const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());

let machine = { id: 1, etat: "libre" };

app.post('/reservation', (req, res) => {
  if (machine.etat === "occupée") {
    return res.status(400).send("Machine occupée");
  }
  machine.etat = "occupée";
  res.status(200).send("Réservation OK");
});

test('Réservation fonctionne si machine libre', async () => {
  const res = await request(app).post('/reservation');
  expect(res.statusCode).toBe(200);
});

test('Réservation échoue si machine occupée', async () => {
  machine.etat = "occupée";
  const res = await request(app).post('/reservation');
  expect(res.statusCode).toBe(400);
});