import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-primary text-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white bg-gray-600 py-4 px-5 me-2 rounded-md font-bold text-sm">E</span>
          </div>
          <span className="font-display font-bold  text-lg">
            EntrepreneursGuinéeConnect
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="px-4 py-2 text-sm font-medium btn btn-outline bg-white text-primary hover:text-primary transition-colors"
          >
            Connexion
          </Link>
          <Link 
            to="/register" 
            className="btn btn-outline text-primary bg-white text-sm py-2 px-4"
          >
            Inscription
          </Link>
        </nav>
      </div>
    </header>
  );
}
