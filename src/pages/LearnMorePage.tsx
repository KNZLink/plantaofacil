import React from 'react';
import { Calendar, Users, CreditCard, MessageSquare } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import FAQSection from '../components/learn-more/FAQSection';

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <div className="bg-emerald-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">
              Revolucionando a gestão de plantões médicos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Conheça como nossa plataforma está transformando a forma como médicos e hospitais 
              gerenciam seus plantões, tornando todo o processo mais eficiente e transparente.
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Como funciona
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Cadastro Simples',
                  description: 'Processo rápido e seguro para médicos e hospitais'
                },
                {
                  icon: Calendar,
                  title: 'Gestão de Escalas',
                  description: 'Sistema inteligente de agendamento de plantões'
                },
                {
                  icon: CreditCard,
                  title: 'Pagamentos',
                  description: 'Automatização completa dos processos financeiros'
                },
                {
                  icon: MessageSquare,
                  title: 'Comunicação',
                  description: 'Chat integrado para melhor coordenação'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <div className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-gray-600 mb-8">
              Nossa equipe está pronta para ajudar você a começar
            </p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              Fale Conosco
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}