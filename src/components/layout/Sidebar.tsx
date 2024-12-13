import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Users, Building2, CreditCard, BarChart3, MessageSquare, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: BarChart3, href: '/dashboard' },
  { name: 'Agenda', icon: Calendar, href: '/agenda' },
  { name: 'Médicos', icon: Users, href: '/doctors' },
  { name: 'Hospitais', icon: Building2, href: '/hospitals' },
  { name: 'Pagamentos', icon: CreditCard, href: '/payments' },
  { name: 'Chat', icon: MessageSquare, href: '/chat' },
  { name: 'Configurações', icon: Settings, href: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-grow bg-white pt-20 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md
                  ${isActive 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <item.icon 
                  className={`mr-3 h-6 w-6 ${isActive 
                    ? 'text-emerald-500' 
                    : 'text-gray-400 group-hover:text-gray-500'}`} 
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}