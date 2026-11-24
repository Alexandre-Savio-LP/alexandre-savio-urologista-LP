import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../utils/seo';
import { trackWhatsAppClick } from '../utils/analytics';

export default function Privacy() {
  usePageMeta({
    title: 'Política de Privacidade (LGPD) | Dr. Alexandre Sávio — Urologista em Goiânia',
    description:
      'Política de Privacidade e Proteção de Dados (LGPD) do consultório do Dr. Alexandre Sávio, Médico Urologista em Goiânia (CRM-GO 5778).',
    canonicalPath: '/privacidade',
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-body">
      {/* Basic Header */}
      <header className="bg-[#1b344a] text-white py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            <span className="font-medium">Voltar para Início</span>
          </Link>
          <div className="font-heading font-semibold text-lg tracking-wide">
            Dr. Alexandre Sávio
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold font-heading mb-8 text-[#1b344a]">Política de Privacidade</h1>
          
          <div className="space-y-6 text-slate-700 leading-relaxed font-light">
            <p>
              Esta Política de Privacidade descreve como o consultório do <strong>Dr. Alexandre Sávio Oliveira de Freitas</strong> (Médico Urologista — CRM-GO 5778 / RQE 1650), com atendimento em Goiânia - GO, coleta, utiliza e protege os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD) e o Código de Ética Médica do Conselho Federal de Medicina (CFM).
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Coleta de Informações</h2>
            <p>
              Coletamos informações pessoais fornecidas voluntariamente por você ao entrar em contato para agendar uma consulta (via WhatsApp, telefone ou Doctoralia), tais como nome, telefone, dados de convênio/plano de saúde e informações necessárias para o agendamento médico. Também podemos coletar dados estatísticos de navegação anonimizados (cookies de mensuração via Google Analytics 4).
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Finalidade do Uso dos Dados</h2>
            <p>
              Os dados coletados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Agendamento, confirmação e gestão de consultas urológicas particulares e por planos de saúde;</li>
              <li>Comunicação direta com o paciente sobre horários, preparo de exames e orientações médicas;</li>
              <li>Cumprimento de obrigações legais, regulatórias e éticas junto ao Conselho Federal de Medicina (CFM);</li>
              <li>Mensuração agregada de desempenho e melhoria da experiência de navegação no site.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Compartilhamento de Dados e Sigilo Médico</h2>
            <p>
              Suas informações são protegidas por absoluto sigilo médico. Não vendemos, alugamos nem compartilhamos dados pessoais com terceiros para fins comerciais. O compartilhamento somente ocorrerá quando estritamente necessário à assistência à saúde (como hospitais, laboratórios ou operadoras de planos de saúde mediante solicitação do paciente) ou por determinação legal.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Segurança e Armazenamento</h2>
            <p>
              Adotamos medidas técnicas e administrativas adequadas para proteger os dados contra acesso não autorizado, perda, destruição ou alteração. Os prontuários médicos seguem o prazo legal mínimo de guarda estabelecido pelo CFM e pela legislação brasileira.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Direitos do Titular (LGPD)</h2>
            <p>
              Nos termos da LGPD, você pode solicitar a confirmação da existência de tratamento, acesso, correção, atualização ou eliminação dos seus dados pessoais, observadas as obrigações legais de guarda de prontuário médico.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Controlador, Contato e Foro</h2>
            <p>
              Para exercer seus direitos como titular de dados ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato pelo WhatsApp oficial{' '}
              <a
                href="https://wa.me/5562999749488"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('privacidade')}
                className="text-emerald-700 hover:text-emerald-800 underline font-medium"
              >
                (62) 99974-9488
              </a>{' '}
              ou presencialmente no Edifício das Clínicas (Av. Ismerino S. de Carvalho, nº 595, Sala 204, Setor Aeroporto, Goiânia - GO, CEP 74075-040). Fica eleito o Foro da Comarca de Goiânia - GO para dirimir quaisquer questões relativas a esta Política.
            </p>

            <p className="mt-12 text-sm text-slate-600">
              Última atualização: Novembro de 2026
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
