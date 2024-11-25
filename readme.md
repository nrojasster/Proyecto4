# PROYECTO 4: Reservas Hoteleras (DWFSc16)
# Author: Natacha Rojas S.
# Descripción: una aplicación de servicios CRUD y Búsqueda para la industria hotelera, específicamente para la gestión de reservas.
# Fecha: 25-11-2024
# Render: https://proyecto4-1-yhiy.onrender.com

Rutas:

GET: Obtiene Todas Las Reservas almacenadas en la sesión de Render.com, sino hay reservas ingresadas en el arreglo, devuelve
un arreglo vacio.

https://proyecto4-1-yhiy.onrender.com/api/reservas

GET: Obtiene Reserva con ID igual al queryparam id almacenada en la sesión de Render

https://proyecto4-1-yhiy.onrender.com/api/reservas?id=7186ed0e-df25-43e0-a6f9-38eabe2dbb97

POST: Crea Reserva con el json del Body

https://proyecto4-1-yhiy.onrender.com/api/reservas

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

PUT: Modifica Reserva con el json del Body y el id del param

https://proyecto4-1-yhiy.onrender.com/api/reservas/kdkkfdfdfsdf

DELETE: Elimina Reserva según el id del param

https://proyecto4-1-yhiy.onrender.com/api/reservas/kdkkfdfdfsdf


GET: Obtiene Reserva que coincidan con las queryparam fechaInicio y fechaTermino almacenadas en la sesión de Render

https://proyecto4-1-yhiy.onrender.com/api/reservas/ReservaPorFechas?fechaInicio=2024-02-15&fechaTermino=2024-02-17

GET: Obtiene Reserva que coincidan con las queryparam estado almacenadas en la sesión de Render

https://proyecto4-1-yhiy.onrender.com/api/reservas/ReservaPorEstado?estado=anulado

GET: Obtiene Reserva que coincidan con las queryparam hotel almacenadas en la sesión de Render

https://proyecto4-1-yhiy.onrender.com/api/reservas/ReservaPorHotel?hotel=ibis

GET: Obtiene Reserva que coincidan con las queryparam tipoHabitacion almacenadas en la sesión de Render

https://proyecto4-1-yhiy.onrender.com/api/reservas/ReservaPorTipoHabitacion?tipoHabitacion=doble

GET: Obtiene Reserva que coincidan con las queryparam numeroHuespedes almacenadas en la sesión de Render

https://proyecto4-1-yhiy.onrender.com/api/reservas/ReservaPorNumeroHuespedes?numeroHuespedes=1


