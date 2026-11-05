import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function CheckoutScreen() {
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [changeFor, setChangeFor] = useState('');
  const navigate = useNavigate()
  const { cart,totalPrice,clearCart } = useCart();
  // Dados de exemplo do pedido
  const total = totalPrice

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerName.trim()) {
      alert('Por favor, informe o seu nome para continuar.');
      return;
    }

    const isConfirmed = window.confirm(
      `Confirmar pedido no valor total de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}?`
    );

    if (isConfirmed) {
      const orderPayload = {
        customerName,
        paymentMethod,
        changeFor: paymentMethod === 'dinheiro' ? changeFor : null,
        items: cart,
        total,
      };

      console.log('Pedido Finalizado:', orderPayload);
    
      navigate('/success');
      clearCart()
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8 font-sans text-slate-800 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Cabeçalho */}
        <div className="bg-slate-900 px-6 py-4 text-white">
          <h1 className="text-xl font-bold">Finalizar Pedido</h1>
          <p className="text-xs text-slate-400">Preencha os dados abaixo para concluir</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Identificação do Cliente */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Nome do Cliente <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Digite seu nome completo"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm transition-all text-black"
            />
          </div>

          {/* Formas de Pagamento */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">
              Forma de Pagamento <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'pix', label: 'PIX', icon: '⚡' },
                { id: 'cartao', label: 'Cartão', icon: '💳' },
                { id: 'dinheiro', label: 'Dinheiro', icon: '💵' },
              ].map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-medium transition-all ${
                    paymentMethod === method.id
                      ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-lg mb-1">{method.icon}</span>
                  {method.label}
                </button>
              ))}
            </div>

            {/* Campo adicional para Troco se for dinheiro */}
            {paymentMethod === 'dinheiro' && (
              <div className="pt-2">
                <input
                  type="text"
                  placeholder="Troco para quanto? (opcional)"
                  value={changeFor}
                  onChange={(e) => setChangeFor(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            )}
          </div>

          {/* Resumo do Pedido */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Resumo dos Itens</h2>
            <div className="divide-y divide-slate-200">
              {cart.map((item) => (
                <div key={item.id} className="py-2 flex justify-between items-center text-sm">
                  <span className="text-slate-700">
                    <strong className="font-semibold">{item.total}x</strong> {item.name}
                  </span>
                  <span className="font-medium text-slate-900">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.total)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-300 flex justify-between items-center font-bold text-base text-slate-900">
              <span>Total a pagar</span>
              <span className="text-lg text-emerald-600">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}
              </span>
            </div>
          </div>

          {/* Botão de Finalizar */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition-colors text-base flex items-center justify-center gap-2"
          >
            <span>Finalizar Pedido</span>
            <span>→</span>
          </button>

        </form>
      </div>
    </div>
  );
}