import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { trackWhatsAppClick, trackPhoneClick, trackExternalClick } from '../utils/analytics';
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2,
  Mail,
  MessageCircle,
  Shield,
  Activity,
  Award,
  Stethoscope,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  HelpCircle,
  ArrowUp,
  Building2,
  Instagram
} from 'lucide-react';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeLocation, setActiveLocation] = useState<'clinicas' | 'rim'>('clinicas');

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o botão quando rolar além do Hero (~500px)
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const faqs = [
    {
      question: "Como funciona a consulta?",
      answer: "O atendimento pode acontecer de forma particular ou por plano de saúde / seguro saúde. Em uma consulta aprofundada, com tempo suficiente para ouvir suas queixas, realizar um exame clínico detalhado e definir um plano terapêutico individualizado. Ao término do atendimento, fornecemos recibo e, se necessário, o relatório médico para que você possa solicitar o reembolso junto ao seu plano de saúde com total comodidade."
    },
    {
      question: "Quando o homem deve iniciar o acompanhamento preventivo da próstata?",
      answer: "A recomendação da Sociedade Brasileira de Urologia (SBU) é iniciar as consultas de rotina a partir dos 50 anos. Para homens com histórico de câncer de próstata em familiares de primeiro grau (pai ou irmãos) ou homens negros, o acompanhamento deve começar mais cedo, aos 45 anos."
    },
    {
      question: "Como é a recuperação e o preparo para a cirurgia de Vasectomia?",
      answer: "A vasectomia é um procedimento cirúrgico seguro, rápido e com anestesia local. O retorno às atividades leves de escritório ocorre geralmente em 48 a 72 horas. Em consulta prévia, explicamos minuciosamente todas as etapas, orientações pré-operatórias e os prazos para a confirmação de espermograma de controle."
    },
    {
      question: "Quais são as opções modernas para tratamento de cálculos renais (pedras nos rins)?",
      answer: "A conduta varia conforme a dimensão e localização do cálculo. Dispomos de abordagens clínicas medicamentosas e procedimentos minimamente invasivos (como a ureterolitotripsia a laser), que fragmentam o cálculo sem necessidade de incisões externas, proporcionando alívio rápido da dor e recuperação ágil."
    },
    {
      question: "O que devo levar no dia da primeira consulta médica?",
      answer: "É altamente recomendado levar todos os exames laboratoriais de sangue e urina recentes, laudos de ultrassonografia, tomografia ou ressonância magnética anteriores, além da relação de medicamentos de uso contínuo e histórico de procedimentos prévios para enriquecer a avaliação médica."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleWhatsApp = (location: string = 'geral') => {
    trackWhatsAppClick(location);
    window.open('https://wa.me/5562999749488', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-body antialiased selection:bg-emerald-700 selection:text-white pb-20 md:pb-0">
      
      {/* 1. Header / Navbar - Integrado ao tom escuro do Hero */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
              <img 
                src="/heroalexandre.webp" 
                alt="Dr. Alexandre Sávio" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading font-semibold text-lg md:text-xl tracking-wide text-white leading-tight">
                Dr. Alexandre Sávio
              </span>
              <span className="text-[11px] md:text-xs text-slate-300 font-medium tracking-wider mt-0.5">
                Urologia Clínica e Cirúrgica
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 md:gap-3">
            <a 
              href="https://www.instagram.com/dralexandresaviouro/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackExternalClick('instagram_header')}
              className="flex items-center gap-2 border border-white/20 hover:border-pink-500/50 bg-white/5 hover:bg-pink-500/10 text-slate-200 hover:text-white font-medium px-3 md:px-4 py-2 md:py-2.5 rounded-full transition-all duration-300 text-xs md:text-sm shadow-sm group"
              aria-label="Instagram do Dr. Alexandre Sávio"
              title="Siga no Instagram @dralexandresaviouro"
            >
              <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 group-hover:text-pink-300 transition-all duration-300" />
              <span className="hidden sm:inline">Instagram</span>
            </a>

            <button 
              onClick={handleWhatsApp}
              className="flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-slate-950 font-medium px-3.5 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 text-xs md:text-sm shadow-sm group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-emerald-600 transition-colors" />
              <span className="hidden sm:inline">Agendar Consulta</span>
              <span className="sm:hidden">Agendar</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="relative h-[100dvh] lg:min-h-screen lg:h-auto flex flex-col justify-between lg:justify-center overflow-hidden bg-slate-950 pt-0 lg:pt-20">
        
        {/* IMAGEM (Fundo 70/30 no Mobile, Metade Direita no Desktop) */}
        <div className="absolute inset-0 top-20 pointer-events-none lg:w-[55%] lg:left-auto lg:right-0">
          <img 
            src="/heroalexandre.webp" 
            alt="Dr. Alexandre Sávio - Médico Urologista em Goiânia" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-top lg:object-[center_top] opacity-100"
          />
          {/* Tratamento de Fundo Mobile: Degradê vertical subindo da base */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 via-35% to-transparent pointer-events-none lg:hidden" />
          
          {/* Tratamento de Fundo Desktop: Degradê horizontal e vertical sutis */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* ESPAÇADOR TOPO MOBILE (Ocupa o espaço visual superior) */}
        <div className="flex-1 w-full pointer-events-none lg:hidden" />

        {/* CONTEÚDO (Base no Mobile, Esquerda no Desktop) */}
        <div className="relative z-10 w-full px-6 pb-12 sm:pb-16 lg:pb-0 lg:py-24 max-w-7xl mx-auto flex flex-col justify-end lg:justify-center flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start text-left w-full max-w-3xl lg:max-w-[55%] mt-auto lg:mt-0"
          >
            {/* Tag de Especialidade */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-body text-[10px] sm:text-xs text-slate-300 font-medium tracking-widest uppercase">
                MÉDICO UROLOGISTA • CRM 5778 • RQE 1650
              </span>
            </div>
            
            {/* Headline (H1) em Playfair Display - Escala compacta e elegante */}
            <h1 className="font-serif-display font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug lg:leading-tight text-white mb-4 lg:mb-6">
              Médico Urologista em Goiânia com experiência para cuidar de queixas delicadas, sintomas persistentes e casos cirúrgicos
            </h1>
            
            {/* Subheadline em tom itálico elegante */}
            <p className="font-body text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 font-light lg:max-w-lg">
              Experiência em hospitais de referência em Goiânia, com atuação clínica, hospitalar e cirúrgica.
            </p>
            
            {/* Botão de Ação (CTA) */}
            <div className="w-full sm:w-auto">
              <button 
                onClick={handleWhatsApp}
                className="w-full sm:w-auto bg-[#059669] hover:bg-[#047857] text-white font-medium px-8 py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-slate-950/50 text-sm md:text-base"
              >
                <MessageCircle className="w-5 h-5 text-emerald-100" />
                <span>Agendar Consulta</span>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Fita de Texto Animada (Marquee) */}
      <div className="bg-[#0b1120] py-3.5 overflow-hidden flex whitespace-nowrap items-center border-y border-slate-800/60 relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex items-center"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-slate-200 text-xs sm:text-sm md:text-base font-body tracking-wide font-light px-6 sm:px-10">
                Experiência, técnica e cuidado na saúde urológica.
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.6)]"></span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. Seção de Áreas de Atuação e Métricas - Fundo Off-White Nobre (#F8FAFC) */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto">
          
          {/* Métricas Transferidas do Hero para o topo desta seção */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 mb-20"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="flex flex-col items-center text-center md:border-r border-slate-200 pb-6 md:pb-0">
              <span className="text-3xl font-heading font-semibold text-slate-900 mb-1">+30 Anos</span>
              <span className="text-sm text-slate-500 font-light leading-snug">de Experiência</span>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="flex flex-col items-center text-center md:border-r border-slate-200 pb-6 md:pb-0">
              <span className="text-3xl font-heading font-semibold text-slate-900 mb-1">SBU & AMB</span>
              <span className="text-sm text-slate-500 font-light leading-snug">Título de especialista</span>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="flex flex-col items-center text-center">
              <span className="text-3xl font-heading font-semibold text-slate-900 mb-1">UFG</span>
              <span className="text-sm text-slate-500 font-light leading-snug">Graduação e Residência</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase mb-2 block">
              Para quem é
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-slate-900 mb-4">
              Cuidado urológico com experiência e responsabilidade
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              O atendimento é voltado para homens e mulheres que buscam cuidado urológico com experiência, seja para prevenção, investigação de sintomas, acompanhamento especializado ou avaliação de casos com possível indicação cirúrgica.
            </p>

            {/* Nova Lista: Principais casos atendidos */}
            <div className="mt-10">
              <h3 className="text-slate-800 font-medium text-lg mb-6 text-center">Principais casos atendidos:</h3>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto"
              >
                {[
                  "Sintomas urinários",
                  "Alterações na próstata",
                  "Infecções urinárias",
                  "Cálculos renais",
                  "Dor ou desconforto urológico",
                  "Prevenção em saúde masculina",
                  "Avaliação urológica geral"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-white border border-slate-200/80 hover:bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium group-hover:text-emerald-900 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 text-center flex flex-col items-center gap-6"
          >
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              Cada caso exige escuta, exame clínico e conduta médica individualizada.
            </p>
            <button 
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors shadow-sm"
            >
              <span>Falar pelo Whatsapp</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Nova Seção de Avaliações */}
      <section className="py-24 px-6 bg-[#f0f0f0] border-y border-slate-200/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase mb-2 block">
              Comentários e Avaliações
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-slate-900 mb-4">
              A confiança dos pacientes é parte essencial de uma trajetória construída com experiência, ética e cuidado.
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Avaliação 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                    W
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">Wilson Reinaldo</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      Consulta verificada <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="flex text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-base">
                Excelente profissional, competente, atencioso e pontual, indico com certeza
              </p>
            </div>

            {/* Avaliação 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                    H
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">Hortencia</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      Consulta verificada <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="flex text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-base">
                Médico atencioso, realizou a cirurgia do meu pai.
              </p>
            </div>

            {/* Avaliação 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                    A
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">Antônio Rego</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      Consulta verificada <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="flex text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-base">
                Excelente médico, conhece bem seu ofício e determina um tratamento adequado e de bom resultado!
              </p>
            </div>

            {/* Avaliação 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                    B
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">Bruno de Barros Borges</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      Consulta verificada <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="flex text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-base whitespace-pre-line">
                Muito bom atencioso e eficaz no<br/>Tratamento direto no problema é muito competente para resolvê-lo
              </p>
            </div>

            {/* Avaliação 5 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                    G
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">Genildo</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      Consulta verificada <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="flex text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-base">
                Fui muito bem atendido. Médico muito experiente, pontual e detalhista.
              </p>
            </div>

            {/* Avaliação 6 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                    A
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">Antônio Júlio César Aires de Morais</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      Consulta verificada <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="flex text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-base">
                Tratamento e é atendimento dentro da expectativa, atenção e explicação pós cirurgia excelente.
              </p>
            </div>

            {/* Avaliação 7 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                    D
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">Daniela Cristina</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      Consulta verificada <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="flex text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-base">
                Excelente médico, já atende nossa família a anos.<br/>Transmite segurança e tranquiliza o paciente.
              </p>
            </div>

            {/* Avaliação 8 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                    A
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">Andre Tadeu de Freitas</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      Consulta verificada <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="flex text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-base whitespace-pre-line">
                Ótimo atendimento muito detalhado<br/>Só a Agradecer<br/>Consulta no.horario sem esperar<br/>Muito obrigado
              </p>
            </div>

            {/* Avaliação 9 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                    R
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">Rogério Martins da Costa</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      Consulta verificada <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="flex text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-base">
                Muito bom, prestativo atencioso gostei, é a segunda vez que consulto.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Nova Seção de Especialidades */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase mb-2 block">
              Especialidades & Procedimentos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-slate-900 mb-4">
              Avaliação Criteriosa e Conduta Responsável para Cada Caso
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              Atendimento focado na precisão diagnóstica, bem-estar e plano terapêutico sob medida.
            </p>
          </motion.div>

          {/* Cards com Transição Sequencial Fluida (Staggered Fade-in) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.14,
                  delayChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            
            {/* Card 1 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
                }
              }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                  <Stethoscope className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                  Vasectomia e Procedimentos Cirúrgicos
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Abordagem segura e cuidadosa para procedimentos urológicos, priorizando o conforto pós-operatório e rápida recuperação do paciente.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
                }
              }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                  Cálculos Renais e Endourologia
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Tratamento clínico e técnicas minimamente invasivas a laser para a fragmentação e remoção ágil de cálculos urinários.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
                }
              }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                  Prevenção e Alterações na Próstata
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Acompanhamento preventivo completo da saúde masculina (40+), rastreamento precoce e conduta responsável para hiperplasia prostática.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
                }
              }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                  Transplante Renal e Cirurgias de Alta Complexidade
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Experiência acumulada em grandes hospitais de Goiânia, com histórico em equipes de referência cirúrgica e casos altamente complexos.
                </p>
              </div>
            </motion.div>

            {/* Card 5 - Destaque em 2 colunas com CTA integrado */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
                }
              }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-300 md:col-span-2 lg:col-span-2"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="max-w-xl">
                    <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                      Investigação de Sintomas Urinários e Infecções Recorrentes
                    </h3>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      Diagnósticos laboratoriais e clínicos minuciosos para resolução de infecções reincidentes e restauração da qualidade de vida diária.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center flex flex-col items-center gap-6"
          >
            <p className="text-slate-500 text-xs md:text-sm uppercase tracking-widest font-medium text-center">
              Cada paciente exige escuta atenta, exame clínico detalhado e conduta personalizada.
            </p>
            <button 
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors shadow-sm"
            >
              <span>Avaliar meu caso</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4. Autoridade e Trajetória */}
      <section className="py-24 px-6 bg-[#e1e1e1]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-5/12"
          >
            <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase mb-2 block text-center">
              Sobre mim
            </span>
            {/* Moldura com cantos arredondados, leve sombra e imagem institucional de prestígio */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/60 aspect-[3/4] bg-slate-800">
              <img 
                src="/secao-sobre.png" 
                alt="Dr. Alexandre Sávio - Médico Urologista em Goiânia" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-20 flex flex-col justify-end p-6 text-white">
                <span className="font-heading text-lg font-semibold">Dr. Alexandre Sávio</span>
                <span className="text-xs text-slate-300">CRM-GO 5778 • RQE 1650</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-7/12"
          >
            <span className="text-xs font-semibold tracking-widest text-[#1b344a]/70 uppercase mb-2 block">
              Tradição e Experiência Médica
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-[#1b344a] mb-6">
              Sou o Dr. Alexandre Sávio, médico urologista.
            </h2>
            <div className="space-y-4 text-base md:text-lg text-slate-700 font-light leading-relaxed mb-8">
              <p>
                Há mais de três décadas, dedico minha carreira à Urologia, com atuação clínica, hospitalar e cirúrgica.
              </p>
              <p> 
                Construí minha trajetória entre o atendimento clínico, a rotina hospitalar e a atuação cirúrgica. Ao longo da carreira, trabalhei na linha de frente de grandes hospitais de Goiânia, participei de equipes de referência e acumulei experiência em cirurgias urológicas, transplantes renais e procedimentos de diferentes níveis de complexidade.
              </p>
              <p>
                Atendo cada paciente com seriedade, prudência e cuidado individualizado, oferecendo uma medicina responsável, técnica e humana.
              </p>
            </div>

            <ul className="space-y-3.5 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-slate-800 text-sm md:text-base font-normal">Formação e residência médica pela prestigiada Universidade Federal de Goiás (UFG).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-slate-800 text-sm md:text-base font-normal">Membro da Sociedade Brasileira de Urologia (SBU) com Título de Especialista pela AMB.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-slate-800 text-sm md:text-base font-normal">Vasta experiência em cirurgias urológicas, transplantes renais e procedimentos de alta complexidade.</span>
              </li>
            </ul>
            
            <button 
              onClick={handleWhatsApp} 
              className="border-2 border-[#1b344a] text-[#1b344a] font-medium px-8 py-3.5 rounded-full hover:bg-[#1b344a] hover:text-white transition-all duration-300 text-sm shadow-sm"
            >
              Conheça meu atendimento
            </button>
          </motion.div>
        </div>
      </section>

      {/* 5. Localização e Contato - Com Mapa Real Embutido Interativo */}
      <section className="py-24 px-6 bg-[#1b344a] text-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2 block">
              Onde me encontrar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-3 text-white">
              Agende sua Consulta
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-light max-w-xl mx-auto">
              Atendimento presencial em Goiânia nos locais de excelência médica.
            </p>
          </div>

          <div className="bg-[#132637] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col lg:flex-row">
            
            {/* Informações de Contato e Locais */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                
                {/* Endereço 1 - Edifício das Clínicas */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  onClick={() => setActiveLocation('clinicas')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    activeLocation === 'clinicas'
                      ? 'bg-white/[0.06] border-emerald-500/50 shadow-md ring-1 ring-emerald-500/20'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase font-body">
                          Endereço 1
                        </span>
                        {activeLocation === 'clinicas' && (
                          <span className="text-[10px] text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-medium">
                            Ativo no mapa
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-white mb-1.5">
                        Edifício das Clínicas
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed font-body">
                        Av. Ismerino S. de Carvalho, nº 595, Sala 204<br />
                        Setor Aeroporto, Goiânia - GO<br />
                        CEP: 74075-040
                      </p>

                      <div className="mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Clock className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-sm text-white mb-0.5">
                            Horário de Atendimento
                          </h4>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
                            Segunda, Quarta, Quinta e Sexta: 09h às 12h e 14h às 18h
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Endereço 2 - Hospital do Rim */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  onClick={() => setActiveLocation('rim')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    activeLocation === 'rim'
                      ? 'bg-white/[0.06] border-emerald-500/50 shadow-md ring-1 ring-emerald-500/20'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase font-body">
                          Endereço 2
                        </span>
                        {activeLocation === 'rim' && (
                          <span className="text-[10px] text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-medium">
                            Ativo no mapa
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-white mb-1.5">
                        Hospital do Rim
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed font-body">
                        Alameda das Rosas, 2041 — Setor Oeste
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed font-body mt-1">
                        Agendamentos pelo número:{' '}
                        <a 
                          href="tel:6230963200" 
                          onClick={(e) => {
                            e.stopPropagation();
                            trackPhoneClick('hospital_rim');
                          }} 
                          className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-2 transition-colors"
                        >
                          (62) 3096-3200
                        </a>
                      </p>

                      <div className="mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Clock className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-sm text-white mb-0.5">
                            Horário de Atendimento
                          </h4>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
                            Segunda e quinta: Das 16h às 19h
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Atendimento Particular */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-4 px-2 pt-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-white mb-1">
                      Atendimento Particular
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-body">
                      Consultas com hora marcada e atenção integral.
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* Botões de Ação */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <button 
                  onClick={handleWhatsApp} 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 text-sm transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Consulta via WhatsApp</span>
                </button>

                <a 
                  href="https://www.doctoralia.com.br/alexandre-savio-oliveira-de-freitas/urologista/goiania" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackExternalClick('doctoralia')}
                  className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-emerald-400/40 font-medium py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5 text-sm group"
                >
                  <Stethoscope className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Meu perfil no Doctoralia</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Mapa Interativo Real do Google Maps Embed com Seletor de Unidades */}
            <div className="w-full lg:w-1/2 min-h-[460px] lg:min-h-[600px] flex flex-col relative bg-slate-900 border-t lg:border-t-0 lg:border-l border-white/10">
              
              {/* Barra Superior do Mapa com Seletor e Link Externo */}
              <div className="p-3 bg-[#0d1a26] border-b border-white/10 flex flex-wrap items-center justify-between gap-2 z-10">
                <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10">
                  <button
                    onClick={() => setActiveLocation('clinicas')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      activeLocation === 'clinicas'
                        ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Ed. das Clínicas</span>
                  </button>

                  <button
                    onClick={() => setActiveLocation('rim')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      activeLocation === 'rim'
                        ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Hospital do Rim</span>
                  </button>
                </div>

                {/* Botão Abrir no Google Maps da Unidade Selecionada */}
                <a
                  href={
                    activeLocation === 'clinicas'
                      ? "https://maps.google.com/?q=Av.+Ismerino+S.+de+Carvalho,+595+-+Setor+Aeroporto,+Goiânia+-+GO,+74075-040"
                      : "https://maps.google.com/?q=Hospital+do+Rim,+Alameda+das+Rosas,+2041+-+Setor+Oeste,+Goiânia+-+GO"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalClick(`google_maps_${activeLocation}`)}
                  className="inline-flex items-center gap-1.5 bg-white text-slate-900 hover:bg-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors shrink-0"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </div>

              {/* Iframe do Mapa */}
              <div className="relative flex-1 w-full min-h-[380px] lg:min-h-[520px]">
                <iframe
                  key={activeLocation}
                  title={activeLocation === 'clinicas' ? "Localização Edifício das Clínicas" : "Localização Hospital do Rim"}
                  src={
                    activeLocation === 'clinicas'
                      ? "https://maps.google.com/maps?q=Av.+Ismerino+S.+de+Carvalho,+595+-+Setor+Aeroporto,+Goi%C3%A2nia+-+GO,+74075-040&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      : "https://maps.google.com/maps?q=Hospital+do+Rim,+Alameda+das+Rosas,+2041+-+Setor+Oeste,+Goi%C3%A2nia+-+GO&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  }
                  className="w-full h-full min-h-[380px] lg:min-h-[520px] border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Perguntas Frequentes (FAQ) - Estilo Acordeão de Alta Classe */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase mb-2 block">
              Dúvidas Comuns • Esclarecimentos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-slate-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Informações transparentes sobre o atendimento particular, consultas e procedimentos urológicos.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full py-6 px-6 sm:px-8 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/70"
                  >
                    <span className="font-heading font-semibold text-lg sm:text-xl md:text-2xl text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? 'bg-slate-900 text-white border-slate-900 rotate-180'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 pt-1 border-t border-slate-100">
                          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Chamada para dúvidas adicionais */}
          <div className="mt-14 p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-heading font-semibold text-xl text-slate-900 mb-1">
                Ainda tem alguma dúvida específica?
              </h3>
              <p className="font-body text-slate-600 text-sm font-light">
                Nossa equipe de atendimento está à disposição para esclarecer tudo com discrição.
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="shrink-0 inline-flex items-center gap-2 bg-[#1b344a] hover:bg-[#142838] text-white text-sm font-medium px-6 py-3 rounded-full transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>

        </div>
      </section>

      {/* 7. Footer Legal com Área de Redes Sociais */}
      <footer className="bg-[#132637] text-slate-300 pt-16 pb-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

          {/* Área: Minhas Redes Sociais e Perfis Oficiais */}
          <div className="w-full max-w-4xl mb-12">
            <div className="flex flex-col items-center mb-6">
              <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Canais Oficiais
              </span>
              <h3 className="text-white font-heading font-semibold text-xl md:text-2xl tracking-wide">
                Minhas Redes Sociais
              </h3>
              <p className="text-slate-400 text-xs md:text-sm mt-1.5 max-w-md font-light">
                Acompanhe orientações em urologia, rotina de atendimentos e veja opiniões de pacientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 md:gap-4 text-left">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/dralexandresaviouro/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackExternalClick('instagram_footer')}
                className="group relative flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-pink-500/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-950/20 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-white text-sm">Instagram</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-pink-300 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5 font-light">@dralexandresaviouro</p>
                  <span className="inline-block text-[11px] text-pink-400 font-medium mt-1">Acessar perfil &rarr;</span>
                </div>
              </a>

              {/* Doctoralia */}
              <a 
                href="https://www.doctoralia.com.br/alexandre-savio-oliveira-de-freitas/urologista/goiania" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackExternalClick('doctoralia_footer')}
                className="group relative flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-emerald-950/20 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-white text-sm">Doctoralia</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-300 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5 font-light">Perfil & Opiniões</p>
                  <span className="inline-block text-[11px] text-emerald-400 font-medium mt-1">Ver perfil &rarr;</span>
                </div>
              </a>

              {/* Perfil do Google */}
              <a 
                href="https://share.google/zb4GC3Yr96uL3ZDLK" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackExternalClick('google_profile_footer')}
                className="group relative flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-950/20 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-white text-sm">Perfil do Google</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5 font-light">Avaliações & Rotas</p>
                  <span className="inline-block text-[11px] text-blue-400 font-medium mt-1">Ver no Google &rarr;</span>
                </div>
              </a>
            </div>
          </div>

          {/* Divisor e Informações Institucionais / CFM */}
          <div className="w-full max-w-4xl border-t border-white/10 pt-8 flex flex-col items-center">
            <p className="text-sm font-semibold text-white mb-2">
              Dr. Alexandre Sávio — Médico Urologista | CRM-GO 5778
            </p>
            <p className="text-xs max-w-3xl leading-relaxed mb-6 text-slate-400 font-light">
              © {new Date().getFullYear()} Todos os direitos reservados. As informações contidas neste site têm caráter exclusivamente informativo e não substituem a consulta médica presencial. Em conformidade com o Manual de Publicidade Médica do CFM.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <Link to="/privacidade" className="hover:text-white transition-colors underline underline-offset-4">Política de Privacidade</Link>
              <span>•</span>
              <Link to="/termos" className="hover:text-white transition-colors underline underline-offset-4">Termos de Atendimento</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* 7. Floating Bottom Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50 md:hidden pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
             <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-slate-200 shadow-sm">
               <img 
                 src="/fotoperfilalexandre.jpg" 
                 alt="Dr. Alexandre Sávio" 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover object-top" 
               />
             </div>
             <div className="flex flex-col">
               <span className="font-semibold text-sm text-slate-900 leading-tight">Dr. Alexandre Sávio</span>
               <span className="text-[10px] text-slate-500 font-normal">Urologia Particular</span>
             </div>
          </div>
          <button 
            onClick={handleWhatsApp} 
            className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2.5 rounded-full transition-colors text-xs shadow-md flex items-center gap-1.5"
          >
             <MessageCircle className="w-3.5 h-3.5" />
             <span>Agendar</span>
          </button>
        </div>
      </div>

      {/* 8. Botão Flutuante Voltar ao Topo */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Voltar ao Topo"
            className="fixed bottom-24 md:bottom-8 right-6 z-40 w-12 h-12 rounded-full bg-[#1b344a]/90 hover:bg-[#1b344a] text-white shadow-xl hover:shadow-2xl border border-white/20 backdrop-blur-md flex items-center justify-center transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          >
            <ArrowUp className="w-5 h-5 text-slate-200 group-hover:text-emerald-400 group-hover:-translate-y-0.5 transition-all duration-200" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

