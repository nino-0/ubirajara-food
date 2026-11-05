/**
 * Formata um valor de acordo com o padrão brasileiro (pt-BR).
 * 
 * @param {number|string|Date} value - O valor a ser formatado
 * @param {'currency'|'number'|'percent'|'date'|'dateTime'} [type='currency'] - O tipo de formatação
 * @param {number} [decimals=2] - Número de casas decimais (para 'number' e 'percent')
 * @returns {string} O valor formatado em string
 */
export function formatBR(value, type = 'currency', decimals = 2) {
  if (value === null || value === undefined || value === '') return '';

  switch (type) {
    case 'currency':
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(value) || 0);

    case 'number':
      return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(Number(value) || 0);

    case 'percent':
      return new Intl.NumberFormat('pt-BR', {
        style: 'percent',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format((Number(value) || 0) / 100);

    case 'date':
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(new Date(value));

    case 'dateTime':
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(value));

    default:
      return String(value);
  }
}