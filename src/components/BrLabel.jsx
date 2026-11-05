import React from 'react';

// Funções de formatação nativas
const formatters = {
  currency: (val) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val ?? 0),

  number: (val, decimals = 2) =>
    new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(val ?? 0),

  percent: (val, decimals = 2) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format((val ?? 0) / 100),

  date: (val) => (val ? new Intl.DateTimeFormat('pt-BR').format(new Date(val)) : '-'),
};

/**
 * Componente Label para exibição direta de valores formatados.
 *
 * @param {Object} props
 * @param {string} [props.label] - Rótulo opcional que antecede o valor (ex: "Total:")
 * @param {number|string|Date} props.value - O valor bruto a ser formatado
 * @param {'currency'|'number'|'percent'|'date'} [props.type='currency'] - Tipo de formatação
 * @param {number} [props.decimals=2] - Casas decimais (para 'number' e 'percent')
 * @param {string} [props.className] - Classes Tailwind/CSS adicionais
 */
export const BRLabel = ({
  label,
  value,
  type = 'currency',
  decimals = 2,
  className = '',
}) => {
  const formatValue = () => {
    switch (type) {
      case 'currency':
        return formatters.currency(value);
      case 'number':
        return formatters.number(value, decimals);
      case 'percent':
        return formatters.percent(value, decimals);
      case 'date':
        return formatters.date(value);
      default:
        return value;
    }
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium text-slate-800 font-bold text-xl ${className}`}>
      {label && <span className="text-slate-500 font-normal">{label}</span>}
      <span>{formatValue()}</span>
    </span>
  );
};

export default BRLabel;