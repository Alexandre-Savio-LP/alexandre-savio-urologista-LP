import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
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
          <h1 className="text-3xl font-bold font-heading mb-8 text-[#1b344a]">Política de Privacidade</h1>
          
          <div className="space-y-6 text-slate-700 leading-relaxed font-light">
            <p>
              Esta Política de Privacidade descreve como o consultório do <strong>Dr. Alexandre Sávio</strong> (doravante "nós", "nosso" ou "consultório") coleta, utiliza e protege os seus dados pessoais. O nosso compromisso é garantir a segurança, a discrição e a privacidade das informações de todos os pacientes e visitantes do nosso site.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Coleta de Informações</h2>
            <p>
              Coletamos informações pessoais que você nos fornece voluntariamente quando entra em contato conosco para agendar uma consulta (por exemplo, via WhatsApp ou formulário), como seu nome, telefone e outras informações relevantes para o atendimento médico. Além disso, podemos coletar automaticamente dados de navegação não identificáveis ao usar nosso site (cookies).
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Uso das Informações</h2>
            <p>
              Os dados coletados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Agendamento e confirmação de consultas urológicas e procedimentos;</li>
              <li>Comunicação direta com o paciente sobre seu tratamento, exames e orientações médicas;</li>
              <li>Cumprimento de obrigações legais, éticas e do Conselho Federal de Medicina (CFM);</li>
              <li>Melhoria da experiência de navegação em nosso site.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Compartilhamento de Dados</h2>
            <p>
              Suas informações são tratadas com absoluto sigilo médico. Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. O compartilhamento só ocorrerá se estritamente necessário para o seu cuidado de saúde (como com hospitais ou laboratórios parceiros, mediante seu consentimento prévio) ou por determinação legal.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Segurança dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais rigorosas para proteger suas informações pessoais contra acesso não autorizado, perda, destruição ou alteração, em total conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Direitos do Usuário</h2>
            <p>
              Você tem o direito de solicitar o acesso, correção, atualização ou exclusão dos seus dados pessoais mantidos por nós, observadas as restrições éticas e legais de guarda de prontuários médicos.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato através do nosso WhatsApp oficial ou diretamente em nosso consultório em Goiânia.
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
