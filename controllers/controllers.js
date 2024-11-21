
class Reserva { 
    constructor(id, nombre, hotel, fechaInicio, fechaTermino, huespedes, tipoHabitacion, estado)
    {
        this.id= id;
        this.nombre= nombre;
        this.hotel= hotel;
        this.fechaInicio= fechaInicio;
        this.fechaTermino= fechaTermino;
        this.huespedes = huespedes;
        this.tipoHabitacion= tipoHabitacion;
        this.estado = estado;
    }
}

const aReservas = [];

const { v4: uuidv4 } = require('uuid');
// 1. Crear Nueva Reserva
const crearReservas = async (req, res) => {
    try {
        const id = uuidv4();
        const {nombre, hotel, fechaInicio, fechaTermino, huespedes, tipoHabitacion, estado} = req.body;
        
        const reserva = new Reserva(id, nombre, hotel, fechaInicio, fechaTermino, huespedes, tipoHabitacion, estado);    
        aReservas.push(reserva);
        res.json({
            msg: 'Reserva OK:',
            data: reserva
        })
    }
    catch (err) {
        res.json({ Mensaje: 'Error al Crear La Reserva'})
    }
}


//2. Muestra todas las reservas o solo una si el id esta presente
const buscarReservaHotel = async (req, res) => {
    const idBusq = req.query.id || "all"
    if (idBusq ==="all"){
        const reserva = aReservas;
        res.json(reserva);
    } else {
        const reserva = aReservas.find(r => r.id === idBusq)
        if (reserva.length === 0) {
            return res.status(404).json({ Resp: 'No Se Encontraron Reservas' })
        } else {
            res.json(reserva);
        }
    }
}

// 3. Eliminar una reserva específica
const borraReserva = async (req, res, next) => {
    try {
        const reservaId = req.params.id

        if (!reservaId){
            return res.status(404).json({ Mensaje: 'ID No Existe!' })
        }
        const reservaDel = aReservas.findIndex((o) => o.id === reservaId)

        if (reservaDel === -1) {
            return res.status(404).json({ Mensaje: 'Reserva No Encontrada' })
        }
        aReservas.splice(reservaDel, 1)
        res.json({ Mensaje: 'Reserva Eliminada Exitosamente' })
    }
    catch (err) {
        res.json({ Mensaje: 'Error al Eliminar La Reserva'})
    }
}


// 4. Actualizar información de una reserva por ID 
const actualizarReserva = async (req, res) => {
    try {
        const reservaId = req.params.id
        const reservaUp = aReservas.findIndex((o) => o.id === reservaId)
    
        if (reservaUp === -1) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
    
        const {nombre, hotel, fechaInicio, fechaTermino, huespedes, tipoHabitacion, estado} = req.body;
    
        // Actualizamos solo si hay nuevos valores en el cuerpo de la solicitud
        if (nombre) aReservas[reservaUp].nombre = nombre;
        if (fechaInicio) aReservas[reservaUp].fechaInicio = fechaInicio;
        if (fechaTermino) aReservas[reservaUp].fechaTermino = fechaTermino;
        if (hotel) aReservas[reservaUp].hotel = hotel;
        if (tipoHabitacion) aReservas[reservaUp].tipoHabitacion = tipoHabitacion;
        if (estado) aReservas[reservaUp].estado = estado;
        if (huespedes) aReservas[reservaUp].huespedes = huespedes;
    
        res.json(aReservas[reservaUp]);
    }
    catch (err) {
        res.json({ Mensaje: 'Error al Actualizar La Reserva'})
    }
};

// 5. Obtener reservas por rango de fechas
const obtenerReservaPorFechas= async (req, res)=> {
    const {fechaInicio,fechaTermino} = req.query
    
    if(!fechaInicio || !fechaTermino){
        return res.json('Error')
    }
 
    const fechaInicioFormateada = new Date(fechaInicio)
    const fechaTerminoFormateada = new Date(fechaTermino)
    
    const reservasFiltradas = aReservas.find(reserva => {
        const inicioReserva = new Date(reserva.fechaInicio)
        const finReserva = new Date(reserva.fechaTermino)
        return inicioReserva >= fechaInicioFormateada && finReserva <= fechaTerminoFormateada
    })
    if (reservasFiltradas.length === 0) {
        return res.status(404).json({ Resp: 'No Se Encontraron Reservas' })
    } else {
        res.json(reservasFiltradas);
    }
}

//6. Muestra todas las reservas que tengan el mismo hotel
const buscarReservaxHotel = async (req, res) => {
    const idBusq = req.query.hotel || "all"
    if (idBusq ==="all"){
        const reserva = aReservas;
        res.json(reserva);
    } else {
        const reserva = aReservas.filter(r => r.hotel.toUpperCase() === idBusq.toUpperCase())
        if (reserva.length === 0) {
            return res.status(404).json({ Resp: 'No Se Encontraron Reservas' })
        } else {
            res.json(reserva);
        }
    }
}

//7. Muestra todas las reservas que tengan el mismo tipo habitacion de req.query.tipoHabitacion
const buscarTipoHabitacion = async (req, res) => {
    const idBusq = req.query.tipoHabitacion || "all"
    if (idBusq ==="all"){
        const reserva = aReservas;
        res.json(reserva);
    } else {
        const reserva = aReservas.filter(r => r.tipoHabitacion.toUpperCase() === idBusq.toUpperCase())
        if (reserva.length === 0) {
            return res.status(404).json({ Resp: 'No Se Encontraron Reservas' })
        } else {
            res.json(reserva);
        }
    }
}

//8. Muestra todas las reservas que tengan el mismo estado de req.query.estado
const buscarReservaxEstado = async (req, res) => {
    const idBusq = req.query.estado || "all"
    if (idBusq ==="all"){
        const reserva = aReservas;
        res.json(reserva);
    } else {
        const reserva = aReservas.filter(r => r.estado.toUpperCase() === idBusq.toUpperCase())
        if (reserva.length === 0) {
            return res.status(404).json({ Resp: 'No Se Encontraron Reservas' })
        } else {
            res.json(reserva);
        }
    }
}

//9. Muestra todas las reservas que tengan el mismo número de huespedes de req.query.numeroHuespedes
const buscarReservaxNumeroHuespedes = async (req, res) => {
    const idBusq = req.query.numeroHuespedes || "all"
    if (idBusq ==="all"){
        const reserva = aReservas;
        res.json(reserva);
    } else {
        const reserva = aReservas.filter(r => r.huespedes === Number(idBusq))
        if (reserva.length === 0) {
            return res.status(404).json({ Resp: 'No Se Encontraron Reservas' })
        } else {
            res.json(reserva);
        }
    }
}

module.exports = {crearReservas, 
    buscarReservaHotel, 
    borraReserva, 
    actualizarReserva,
    obtenerReservaPorFechas,
    buscarReservaxHotel,
    buscarTipoHabitacion,
    buscarReservaxEstado,
    buscarReservaxNumeroHuespedes
};