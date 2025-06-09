import express from 'express';
import * as investController from '../Controllers/investimento.controller.js';

const router = express.Router();

router.post('/', investController.criarInvestimento); // Criar novo investimento
router.get('/', investController.listarInvestimentos); // Listar todos os investimentos
router.get('/:id', investController.obterInvestimentoPorId); // Obter um investimento por ID
router.put('/:id', investController.atualizarInvestimento); // Atualizar investimento por ID
router.delete('/:id', investController.deletarInvestimento); // Deletar investimento por ID

export default router;
