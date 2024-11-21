const express = require("express");
const reservaController = require("../controllers/controllers.js");

const router = express.Router();


router.post('/reservas', reservaController.crearReservas);

router.get('/reservas', reservaController.buscarReservaHotel);

router.delete('/reservas/:id', reservaController.borraReserva);
router.put('/reservas/:id', reservaController.actualizarReserva);
router.get('/reservas/ReservaPorFechas', reservaController.obtenerReservaPorFechas);
router.get('/reservas/ReservaPorHotel', reservaController.buscarReservaxHotel);
router.get('/reservas/ReservaPorTipoHabitacion', reservaController.buscarTipoHabitacion);
router.get('/reservas/ReservaPorEstado', reservaController.buscarReservaxEstado);
router.get('/reservas/ReservaPorNumeroHuespedes', reservaController.buscarReservaxNumeroHuespedes);

module.exports = router;