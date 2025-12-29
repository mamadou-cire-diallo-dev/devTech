import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

// Zod Schema
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'L\'email est requis')
    .email('Email invalide')
});

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit = (data) => {
    console.log('Reset password for:', data.email);
    setSubmittedEmail(data.email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="font-display font-bold text-primary text-xl">
              EntrepreneursGuinéeConnect
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {!submitted ? (
            <>
              <h1 className="text-2xl font-display font-bold text-primary text-center mb-2">
                Mot de passe oublié ?
              </h1>
              <p className="text-gray-500 text-center mb-8">
                Entrez votre email pour recevoir un lien de réinitialisation
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      {...register('email')}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="exemple@email.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary py-3 text-base disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi...' : 'Envoyer le lien'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-2">
                Email envoyé !
              </h2>
              <p className="text-gray-500 mb-6">
                Si un compte existe avec l'adresse <strong>{submittedEmail}</strong>, vous recevrez un lien de réinitialisation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary font-medium hover:underline"
              >
                Renvoyer l'email
              </button>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link 
              to="/login" 
              className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
