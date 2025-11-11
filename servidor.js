import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarios.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', usuarioRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando ✅');
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
