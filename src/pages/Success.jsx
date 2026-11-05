import { PackageCheck } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona após 3 segundos (3000ms)
    const timer = setTimeout(() => {
      navigate('/'); 
    }, 3000);

    // Limpa o temporizador se o componente for desmontado antes
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-50 font-sans antialiased">
      <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-center shadow-xl transition-all animate-in fade-in zoom-in-95 duration-300">
        
        {/* Ícone de Sucesso com Animação */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 animate-bounce">
          <PackageCheck className='h-100 w-100' />
        </div>

        {/* Textos */}
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
          Compra Realizada!
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Obrigado pelo seu pedido. Você será redirecionado para a página inicial em instantes.
        </p>

        {/* Barra de Progresso Visual de 2 Segundos */}
        <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full bg-green-500 transition-all duration-[2000ms] ease-out w-0 animate-[progress_2s_ease-out_forwards]" />
        </div>

      </div>
    </div>
  );
}

export default Success;
