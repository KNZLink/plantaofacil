import React from 'react';
import { Stethoscope, Building2 } from 'lucide-react';
import RegistrationOption from '../components/get-started/RegistrationOption';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha seu perfil
            </h1>
            <p className="text-xl text-gray-600">
              Selecione o tipo de conta mais adequado para você
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RegistrationOption
              title="Para Médicos"
              description="Encontre oportunidades de plantão e gerencie sua agenda profissional"
              icon={Stethoscope}
              benefits={[
                'Acesso a plantões em hospitais parceiros',
                'Gestão completa da agenda',
                'Pagamentos automatizados',
                'Emissão de documentos fiscais',
                'Avaliações e feedback'
              ]}
              linkTo="/register/doctor"
            />

            <RegistrationOption
              title="Para Hospitais"
              description="Otimize a gestão de plantões e encontre profissionais qualificados"
              icon={Building2}
              benefits={[
                'Banco de talentos médicos',
                'Sistema de escalas inteligente',
                'Gestão de pagamentos',
                'Relatórios e métricas',
                'Suporte dedicado 24/7'
              ]}
              linkTo="/register/hospital"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}