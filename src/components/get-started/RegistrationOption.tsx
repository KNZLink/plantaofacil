import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface RegistrationOptionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  linkTo: string;
}

export default function RegistrationOption({
  title,
  description,
  icon: Icon,
  benefits,
  linkTo,
}: RegistrationOptionProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <Icon className="h-10 w-10 text-emerald-600" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="flex-grow">
        <h3 className="font-medium text-gray-900 mb-4">Benefícios:</h3>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      
      <Link
        to={linkTo}
        className="mt-8 w-full bg-emerald-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-emerald-700 transition-colors"
      >
        Cadastrar
      </Link>
    </div>
  );
}