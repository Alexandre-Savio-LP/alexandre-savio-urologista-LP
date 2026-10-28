import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-body">
      {/* Basic Header */}
      <header className="bg-[#1b344a] text-white py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
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
              Ao agendar e realizar uma consulta ou procedimento com o <strong>Dr. Alexandre Sávio</strong>, você concorda com os presentes Termos de Atendimento. A nossa prioridade é oferecer um cuidado médico ético, técnico e transparente.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Natureza do Atendimento</h2>
            <p>
              O atendimento prestado é <strong>exclusivamente particular</strong>. O modelo particular garante ao paciente uma consulta detalhada, pautada pela escuta atenta, diagnóstico preciso e conduta médica individualizada, sem as restrições de tempo frequentemente impostas por convênios médicos.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Recibos e Reembolso</h2>
            <p>
              Ao final do atendimento, emitimos um recibo médico ou nota fiscal com todas as informações necessárias, bem como relatório médico (quando aplicável). Este documento permite que o paciente solicite o <strong>reembolso</strong> junto ao seu plano de saúde, caso o seu contrato contemple essa modalidade. O consultório não se responsabiliza pelos trâmites, prazos ou valores restituídos pelas operadoras de saúde.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Agendamentos, Atrasos e Cancelamentos</h2>
            <p>
              O horário da consulta é reservado especialmente para você. Recomendamos que o paciente chegue com 15 minutos de antecedência.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Atrasos:</strong> Tendo em vista o respeito ao horário dos demais pacientes, atrasos poderão resultar em remarcação, a critério da agenda do dia.</li>
              <li><strong>Cancelamentos:</strong> Solicitamos que cancelamentos ou remarcações sejam informados com no mínimo 24 horas de antecedência, liberando o horário para outro paciente que necessite de atendimento.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Orientações Médicas e Retorno</h2>
            <p>
              O prazo e a necessidade de consulta de retorno para apresentação de exames ou avaliação pós-operatória serão definidos exclusivamente pelo médico, de acordo com o caso clínico, respeitando as normativas do Conselho Federal de Medicina (CFM).
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Responsabilidade Médica</h2>
            <p>
              As informações contidas neste site possuem caráter educativo e informativo. A leitura destas informações <strong>não substitui a consulta médica presencial</strong>. Diagnósticos, prescrições e condutas cirúrgicas (como vasectomia e cálculos renais) só podem ser estabelecidos após a avaliação clínica presencial.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Comunicação e WhatsApp</h2>
            <p>
              O canal de WhatsApp é destinado prioritariamente ao agendamento, dúvidas administrativas e orientações gerais de preparo. Não são realizadas consultas médicas, prescrições ou avaliações de exames pelo WhatsApp sem a devida consulta presencial prévia.
            </p>

            <p className="mt-12 text-sm text-slate-500">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
