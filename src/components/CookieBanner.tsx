import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies anteriormente
    const consent = localStorage.getItem('lgpd_cookie_consent');
    if (!consent) {
      // Exibe após 1.5s para não conflitar com o carregamento inicial
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lgpd_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Aviso de Cookies e Privacidade"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-2xl border border-white/10 shadow-2xl shadow-slate-950/60 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        
        <div className="flex-1 text-xs text-slate-300 leading-relaxed">
          <p className="font-semibold text-slate-100 text-sm mb-1">Privacidade e Cookies</p>
          <p>
            Utilizamos cookies para melhorar a navegação, mensurar o tráfego e garantir a melhor experiência de atendimento, em conformidade com a LGPD.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-1.5 rounded-lg text-xs transition-colors shadow-sm"
            >
              Entendido e aceitar
            </button>
            <Link
              to="/privacidade"
              className="text-slate-400 hover:text-slate-200 underline text-xs transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>

        <button
          onClick={handleAccept}
          className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors -mr-1 -mt-1"
          aria-label="Fechar aviso"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
