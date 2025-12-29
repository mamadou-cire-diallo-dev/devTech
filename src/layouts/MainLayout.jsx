import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
