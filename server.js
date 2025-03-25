import express from 'express';
import cors from 'cors'; // Importe o CORS
import investimentoRouter from './Routers/investimento.router.js';

const app = express();
app.use(cors()); // Middleware CORS
app.use(express.json());
app.use('/api/investments', investimentoRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
