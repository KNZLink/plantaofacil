import React from 'react';
import Navbar from '../components/landing/Navbar';
import RegisterForm from '../components/auth/RegisterForm';
import Footer from '../components/landing/Footer';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  );
}