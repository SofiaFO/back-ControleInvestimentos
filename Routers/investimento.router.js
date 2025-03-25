import express from 'express';
import {
  criarInvestimento,
  listarInvestimentos,
  obterInvestimentoPorId,
  atualizarInvestimento,
  deletarInvestimento,
} from '../Controllers/investimento.controller.js';

const router = express.Router();

router.post('/', criarInvestimento); // Criar novo investimento
router.get('/', listarInvestimentos); // Listar todos os investimentos
router.get('/:id', obterInvestimentoPorId); // Obter um investimento por ID
router.put('/:id', atualizarInvestimento); // Atualizar investimento por ID
router.delete('/:id', deletarInvestimento); // Deletar investimento por ID

export default router;
