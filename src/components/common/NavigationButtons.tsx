import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LogIn, UserPlus, LayoutDashboard } from 'lucide-react';

export default function NavigationButtons() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const buttons = [
    {
      to: '/',
      icon: Home,
      label: 'Home',
      ariaLabel: 'Ir para página inicial',
    },
    {
      to: '/login',
      icon: LogIn,
      label: 'Login',
      ariaLabel: 'Ir para página de login',
    },
    {
      to: '/register',
      icon: UserPlus,
      label: 'Cadastro',
      ariaLabel: 'Ir para página de cadastro',
    },
    {
      to: '/dashboard',
      icon: LayoutDashboard,
      label: 'Dashboard',
      ariaLabel: 'Ir para o painel de controle',
    },
  ];

  return (
    <nav className="flex gap-4" role="navigation" aria-label="Navegação principal">
      {buttons.map(({ to, icon: Icon, label, ariaLabel }) => (
        <Link
          key={to}
          to={to}
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-md
            transition-colors duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
            ${isActive(to)
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }
          `}
          aria-label={ariaLabel}
          aria-current={isActive(to) ? 'page' : undefined}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
          <span className="font-medium">{label}</span>
        </Link>
      ))}
    </nav>
  );
}