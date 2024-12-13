import React from 'react';
import { Building2, MapPin, Phone, Mail } from 'lucide-react';
import type { Hospital } from '../types';

// Mock data - In a real app, this would come from an API
const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'Hospital São Lucas',
    email: 'contato@saolucas.com',
    role: 'hospital',
    cnpj: '12.345.678/0001-90',
    address: 'Av. Principal, 1000 - Centro',
    sectors: ['Emergência', 'UTI', 'Centro Cirúrgico'],
    documents: ['license.pdf', 'certification.pdf'],
  },
  {
    id: '2',
    name: 'Hospital Santa Maria',
    email: 'contato@santamaria.com',
    role: 'hospital',
    cnpj: '98.765.432/0001-10',
    address: 'Rua Secundária, 500 - Jardim',
    sectors: ['Pronto Socorro', 'Maternidade', 'Pediatria'],
    documents: ['license.pdf', 'certification.pdf'],
  },
];

export default function HospitalsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Hospitais Parceiros</h1>
        <p className="mt-1 text-sm text-gray-500">
          Gerencie os hospitais cadastrados na plataforma
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockHospitals.map((hospital) => (
          <div key={hospital.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Building2 className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{hospital.name}</h3>
                  <p className="text-sm text-gray-500">CNPJ: {hospital.cnpj}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                  {hospital.address}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  {hospital.email}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Setores:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.sectors.map((sector) => (
                      <span
                        key={sector}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}