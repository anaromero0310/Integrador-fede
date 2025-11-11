import express from 'express';
import {
  listarTurnos,
  crearTurno,
  modificarTurno,
  eliminarTurno,
  turnosPorUsuario,
} from '../controllers/turnoController.js';

const router = express.Router();

router.get('/turnos', listarTurnos);
router.post('/turnos', crearTurno);
router.put('/turnos/:id', modificarTurno);
router.delete('/turnos/:id', eliminarTurno);
router.get('/mis-turnos/:usuario_id', turnosPorUsuario);

export default router;
