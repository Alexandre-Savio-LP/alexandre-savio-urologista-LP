import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../utils/seo';
import { trackWhatsAppClick } from '../utils/analytics';

export default function Terms() {
  usePageMeta({
    title: 'Termos de Atendimento | Dr. Alexandre Sávio — Urologista em Goiânia',
    description:
      'Termos de Atendimento do Dr. Alexandre Sávio, Médico Urologista em Goiânia (CRM-GO 5778). Regras de consultas particulares, planos de saúde, reembolso e agendamentos.',
    canonicalPath: '/termos',
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
          <h1 className="text-3xl font-bold font-heading mb-8 text-[#1b344a]">Termos de Atendimento</h1>
          
          <div className="space-y-6 text-slate-700 leading-relaxed font-light">
            <p>
              Ao agendar e realizar uma consulta ou procedimento com o <strong>Dr. Alexandre Sávio Oliveira de Freitas</strong> (CRM-GO 5778 / RQE 1650), em Goiânia - GO, você concorda com os presentes Termos de Atendimento. A nossa prioridade é oferecer um cuidado médico ético, técnico e transparente.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Modalidades de Atendimento (Particular e Convênios)</h2>
            <p>
              O atendimento é realizado nas modalidades <strong>particular</strong> e por <strong>planos de saúde / convênios médicos</strong> (incluindo Unimed, Geap Saúde, Caixa Saúde, AFFEGO, Itaú Saúde e outros convênios). Como a aceitação e as regras de cobertura podem variar conforme a categoria do plano e a unidade de atendimento (Edifício das Clínicas ou Hospital do Rim), recomendamos confirmar previamente a elegibilidade do seu plano com nossa equipe antes da consulta.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Recibos e Reembolso</h2>
            <p>
              Para atendimentos particulares, emitimos recibo médico ou nota fiscal com todas as informações necessárias, bem como relatório médico quando clinicamente aplicável, permitindo que o paciente solicite o <strong>reembolso</strong> junto à sua operadora de saúde conforme as regras do seu contrato. O consultório não se responsabiliza pelos prazos ou valores restituídos pelas operadoras.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Agendamentos, Atrasos e Cancelamentos</h2>
            <p>
              O horário da consulta é reservado especialmente para você. Recomendamos que o paciente chegue com 15 minutos de antecedência portando documento de identificação, carteirinha do plano de saúde (quando aplicável) e exames anteriores.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Atrasos:</strong> Tendo em vista o respeito ao horário dos demais pacientes, atrasos poderão resultar em remarcação, a critério da agenda do dia.</li>
              <li><strong>Cancelamentos:</strong> Solicitamos que cancelamentos ou remarcações sejam informados com no mínimo 24 horas de antecedência, liberando o horário para outro paciente que necessite de atendimento.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Orientações Médicas e Retorno</h2>
            <p>
              O prazo e a necessidade de consulta de retorno para apresentação de exames ou avaliação pós-operatória serão definidos exclusivamente pelo médico, de acordo com o caso clínico, respeitando as normativas do Conselho Federal de Medicina (CFM).
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Responsabilidade Médica e Conteúdo Informativo</h2>
            <p>
              As informações contidas neste site possuem caráter educativo e informativo, em conformidade com o Manual de Publicidade Médica do CFM, e <strong>não substituem a consulta médica presencial</strong>. Diagnósticos, prescrições e condutas cirúrgicas (como vasectomia e tratamento de cálculos renais) somente são definidos após avaliação clínica presencial.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Comunicação e WhatsApp</h2>
            <p>
              O canal de WhatsApp{' '}
              <a
                href="https://wa.me/5562999749488"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('termos')}
                className="text-emerald-700 hover:text-emerald-800 underline font-medium"
              >
                (62) 99974-9488
              </a>{' '}
              é destinado prioritariamente ao agendamento, confirmação de convênios, dúvidas administrativas e orientações gerais de preparo. Não são realizadas consultas médicas, prescrições ou avaliações de exames pelo WhatsApp sem consulta presencial prévia.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">7. Legislação Aplicável e Foro</h2>
            <p>
              Estes Termos de Atendimento são regidos pelas leis da República Federativa do Brasil. Fica eleito o <strong>Foro da Comarca de Goiânia - GO</strong> como competente para dirimir quaisquer controvérsias oriundas deste documento.
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
