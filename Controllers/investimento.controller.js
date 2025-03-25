import fs from 'fs';
import path from 'path';
import { validarInvestimento } from '../utils/validacao.js';

const investimentoFile = path.resolve('data', 'investimento.json');

function carregaInvestimento() {
  const data = fs.readFileSync(investimentoFile);
  return JSON.parse(data);
}

function salvaInvestimento(data) {
  fs.writeFileSync(investimentoFile, JSON.stringify(data, null, 2));
}

export const criarInvestimento = (req, res) => {
  try {
    const { name: nome, type: tipo, amount: valor, date: data } = req.body;

    // Validação utilizando a função de validação
    const erro = validarInvestimento({ nome, tipo, valor, data });
    if (erro) {
      return res.status(400).json({ mensagem: erro });
    }

    const investments = carregaInvestimento();
    const newInvestment = { id: Date.now(), nome, tipo, valor, data };
    investments.push(newInvestment);
    salvaInvestimento(investments);

    res.status(201).json({ data: newInvestment, mensagem: 'Investimento criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar investimento', error });
  }
};

// Listar todos os investimentos
export const listarInvestimentos = (req, res) => {
  try {
    const investments = carregaInvestimento();
    res.json({ data: investments, mensagem: 'Listagem de investimentos realizada com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar investimentos', error });
  }
};

// Obter um investimento por ID
export const obterInvestimentoPorId = (req, res) => {
  try {
    const investments = carregaInvestimento();
    const investimento = investments.find((inv) => inv.id == req.params.id);

    if (!investimento) {
      return res.status(404).json({ mensagem: 'Investimento não encontrado' });
    }

    res.json({ data: investimento, mensagem: 'Investimento encontrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar investimento', error });
  }
};

// Atualizar um investimento
export const atualizarInvestimento = (req, res) => {
  try {
    const { nome, tipo, valor, data } = req.body;
    const investments = carregaInvestimento();
    const index = investments.findIndex((inv) => inv.id == req.params.id);

    if (index === -1) {
      return res.status(404).json({ mensagem: 'Investimento não encontrado' });
    }

    if (valor !== undefined && valor <= 0) {
      return res.status(400).json({ mensagem: 'O valor investido deve ser maior que 0.' });
    }
    if (data && new Date(data) > new Date()) {
      return res.status(400).json({ mensagem: 'A data do investimento não pode ser no futuro.' });
    }

    investments[index] = {
      ...investments[index],
      nome: nome || investments[index].nome,
      tipo: tipo || investments[index].tipo,
      valor: valor !== undefined ? valor : investments[index].valor,
      data: data || investments[index].data,
    };

    salvaInvestimento(investments);
    res.json({ data: investments[index], mensagem: 'Investimento atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar investimento', error });
  }
};

// Deletar um investimento
export const deletarInvestimento = (req, res) => {
  try {
    const investments = carregaInvestimento();
    const newInvestments = investments.filter((inv) => inv.id != req.params.id);

    if (newInvestments.length === investments.length) {
      return res.status(404).json({ mensagem: 'Investimento não encontrado' });
    }

    salvaInvestimento(newInvestments);
    res.json({ mensagem: 'Investimento deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar investimento', error });
  }
};
