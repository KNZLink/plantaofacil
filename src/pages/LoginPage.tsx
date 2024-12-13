import React from 'react';
import Navbar from '../components/landing/Navbar';
import LoginForm from '../components/auth/LoginForm';
import Footer from '../components/landing/Footer';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}