import { db } from '../config/db.js';

export const listarTurnos = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM turnos');
  res.json(rows);
};

export const crearTurno = async (req, res) => {
  try {
    const { usuario_id, fecha, hora, servicio } = req.body;
    if (!usuario_id || !fecha || !hora || !servicio) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }
    await db.query('INSERT INTO turnos (usuario_id, fecha, hora, servicio) VALUES (?, ?, ?, ?)', [
      usuario_id,
      fecha,
      hora,
      servicio,
    ]);
    res.status(201).json({ mensaje: 'Turno creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear turno' });
  }
};

export const modificarTurno = async (req, res) => {
  const { id } = req.params;
  const { fecha, hora, servicio } = req.body;
  await db.query('UPDATE turnos SET fecha=?, hora=?, servicio=? WHERE id=?', [fecha, hora, servicio, id]);
  res.json({ mensaje: 'Turno actualizado correctamente' });
};

export const eliminarTurno = async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM turnos WHERE id=?', [id]);
  res.json({ mensaje: 'Turno eliminado correctamente' });
};

export const turnosPorUsuario = async (req, res) => {
  const { usuario_id } = req.params;
  const [rows] = await db.query('SELECT * FROM turnos WHERE usuario_id=?', [usuario_id]);
  res.json(rows);
};
