import React from 'react';
import { Menu, Bell, User, LogOut } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-400 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-emerald-600">PlantãoFácil</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-400 hover:bg-gray-100">
              <Bell className="h-6 w-6" />
            </button>
            <div className="relative">
              <button className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-100">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=32"
                  alt="User"
                />
                <User className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            <button className="p-2 rounded-full text-gray-400 hover:bg-gray-100">
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}