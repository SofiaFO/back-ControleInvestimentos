import express from 'express';
import cors from 'cors';
import investimentoRouter from './Routers/investimento.router.js';

const app = express();
app.use(cors()); 
app.use(express.json());
app.use('/api/investments', investimentoRouter);

const PORT = 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
