const express = require("express");
const reservaRoutes = require("./routes/routes.js");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", reservaRoutes);

// Middleware para manejar 404 Not Found
app.use((req, res) => {
    res.status(404).send({ message: 'Ruta no encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});