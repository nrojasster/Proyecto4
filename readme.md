# PROYECTO 4: Reservas Hoteleras (DWFSc16)
# Author: Natacha Rojas S.
# Descripción: una aplicación de servicios CRUD y Búsqueda para la industria hotelera, específicamente para la gestión de reservas.
# Fecha: 25-11-2024

Rutas:

GET: Obtiene Todas Las Reservas almacenadas en la sesión de Render.com

https://proyecto4-uo12.onrender.com/api/reservas

GET: Obtiene Reserva con ID igual al queryparam id almacenada en la sesión de Render

https://proyecto4-uo12.onrender.com/api/reservas?id=7186ed0e-df25-43e0-a6f9-38eabe2dbb97

POST: Crea Reserva con el json del Body

https://proyecto4-uo12.onrender.com/api/reservas

ejemplo Body:
{
    "nombre": "Maria Elena Cancino",
    "hotel": "Ibis",
    "fechaInicio": "2024-02-15",
    "fechaTermino": "2024-02-18",
    "huespedes": 2,
    "tipoHabitacion": "doble",
    "estado": "reservado"
  }


