import express from 'express';
const router = express.Router();

router.get('/usuarios', (req, res) => {
  res.json({ mensaje: 'Ruta /api/usuarios funcionando ✅' });
});

export default router;
