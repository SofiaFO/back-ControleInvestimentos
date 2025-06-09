import { PrismaClient } from "@prisma/client";
import { validarInvestimento } from '../utils/validacao.js';

const prisma = new PrismaClient();

// Criar investimento
export const criarInvestimento = async (req, res) => {
  try {
    const { nome, tipo, valor, data } = req.body;

    const erro = validarInvestimento({ nome, tipo, valor, data });
    if (erro) {
      return res.status(400).json({ mensagem: erro });
    }

    const newInvestment = await prisma.investimento.create({
      data: { 
        nome, 
        tipo, 
        valor, 
        data: new Date(data) 
      },
    });

    res.status(201).json({ data: newInvestment, mensagem: 'Investimento criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar investimento', error });
  }
};

// Listar todos os investimentos
export const listarInvestimentos = async (req, res) => {
  try {
    const investments = await prisma.investimento.findMany();

    res.json({ investments, mensagem: 'Listagem de investimentos realizada com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar investimentos', error });
  }
};

// Obter um investimento por ID
export const obterInvestimentoPorId = async (req, res) => {
  try {
    const investimento = await prisma.investimento.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!investimento) {
      return res.status(404).json({ mensagem: 'Investimento não encontrado' });
    }

    // Mensagem no terminal
    console.log('Investimento encontrado:', investimento);

    res.json({ data: investimento, mensagem: 'Investimento encontrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar investimento', error });
  }
};

// Atualizar um investimento
export const atualizarInvestimento = async (req, res) => {
  try {
    const { nome, tipo, valor, data } = req.body;

    if (valor !== undefined && valor <= 0) {
      return res.status(400).json({ mensagem: 'O valor investido deve ser maior que 0.' });
    }
    if (data && new Date(data) > new Date()) {
      return res.status(400).json({ mensagem: 'A data do investimento não pode ser no futuro.' });
    }

    const investimento = await prisma.investimento.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!investimento) {
      return res.status(404).json({ mensagem: 'Investimento não encontrado' });
    }

    const investimentoAtualizado = await prisma.investimento.update({
      where: { id: Number(req.params.id) },
      data: {
        nome: nome ?? investimento.nome,
        tipo: tipo ?? investimento.tipo,
        valor: valor !== undefined ? valor : investimento.valor,
        data: data ? new Date(data) : investimento.data,
      },
    });

    res.json({ data: investimentoAtualizado, mensagem: 'Investimento atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar investimento', error });
  }
};

// Deletar um investimento
export const deletarInvestimento = async (req, res) => {
  try {
    const investimento = await prisma.investimento.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!investimento) {
      return res.status(404).json({ mensagem: 'Investimento não encontrado' });
    }

    await prisma.investimento.delete({
      where: { id: Number(req.params.id) },
    });


    res.json({ mensagem: 'Investimento deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar investimento', error });
  }
};
