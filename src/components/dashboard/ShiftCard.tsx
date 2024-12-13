import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';
import type { Shift } from '../../types';

interface ShiftCardProps {
  shift: Shift;
}

export default function ShiftCard({ shift }: ShiftCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{shift.specialty}</h3>
          <p className="text-sm text-gray-500">{shift.sector}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          shift.status === 'available' ? 'bg-green-100 text-green-800' :
          shift.status === 'booked' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {shift.status.charAt(0).toUpperCase() + shift.status.slice(1)}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          <span>{shift.startTime} - {shift.endTime}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-2" />
          <span>Hospital ID: {shift.hospitalId}</span>
        </div>
        {shift.doctorId && (
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-4 w-4 mr-2" />
            <span>Médico ID: {shift.doctorId}</span>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-emerald-600">
            R$ {shift.payment.toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
            {shift.status === 'available' ? 'Candidatar' : 'Ver Detalhes'}
          </button>
        </div>
      </div>
    </div>
  );
}