export const validarInvestimento = ({ nome, tipo, valor, data }) => {
    if (!nome || !tipo || !valor || !data) {
      return 'Todos os campos são obrigatórios.';
    }
    if (valor <= 0) {
      return 'O valor investido deve ser maior que 0.';
    }
    if (new Date(data) > new Date()) {
      return 'A data do investimento não pode ser no futuro.';
    }
    return null;
  };
  