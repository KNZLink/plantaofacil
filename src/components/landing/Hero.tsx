import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Calendar, CreditCard, Users, Building2 } from 'lucide-react';
import { features } from '../../utils/constants';

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-br from-emerald-700 to-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Simplifique seus plantões médicos
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 font-light">
            Gerencie escalas, encontre oportunidades e organize pagamentos em uma única plataforma
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-medium text-lg hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              Começar agora
            </Link>
            <Link
              to="/learn-more"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium text-lg hover:scale-105 transition-transform duration-200"
            >
              Saiba mais
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <feature.icon className="h-12 w-12 text-white mx-auto" />
              <h3 className="mt-4 text-xl font-medium text-white">{feature.title}</h3>
              <p className="mt-2 text-white/90 font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent opacity-50" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent opacity-50" />
      </div>
    </div>
  );
}