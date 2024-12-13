export interface User {
  id: string;
  name: string;
  email: string;
  role: 'doctor' | 'hospital' | 'admin';
  profileImage?: string;
}

export interface Doctor extends User {
  crm: string;
  specialty: string;
  availability: {
    [key: string]: boolean;
  };
  documents: string[];
}

export interface Hospital extends User {
  cnpj: string;
  address: string;
  sectors: string[];
  documents: string[];
}

export interface Shift {
  id: string;
  hospitalId: string;
  doctorId?: string;
  date: string;
  startTime: string;
  endTime: string;
  specialty: string;
  status: 'available' | 'booked' | 'completed';
  sector: string;
  payment: number;
}