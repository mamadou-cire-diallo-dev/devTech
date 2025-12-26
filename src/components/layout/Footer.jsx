import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <Link to="/sponsors" className="hover:text-primary transition-colors font-medium">
            Sponsors
          </Link>
          <Link to="/partenaires" className="hover:text-primary transition-colors font-medium">
            Partenaires
          </Link>
          <Link to="/plateformes" className="hover:text-primary transition-colors font-medium">
            Plateformes
          </Link>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>&copy; 2025 Dev & Tech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
