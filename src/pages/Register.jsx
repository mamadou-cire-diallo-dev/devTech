import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff } from 'lucide-react';

// Zod Schema
const registerSchema = z.object({
  firstName: z.string().min(1, 'Prénom requis'),
  lastName: z.string().min(1, 'Nom requis'),
  email: z
    .string()
    .min(1, 'Email requis')
    .email('Email invalide'),
  phone: z.string().optional(),
  password: z
    .string()
    .min(1, 'Mot de passe requis')
    .min(8, 'Minimum 8 caractères'),
  confirmPassword: z.string().min(1, 'Confirmation requise')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword']
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data) => {
    console.log('Register:', data);
    // Implement register logic
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center p-8 overflow-hidden">
      <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl w-full overflow-hidden">
        {/* Left - User Avatar Placeholder */}
        <div className="hidden lg:flex lg:w-1/2 bg-gray-200 items-center justify-center p-8">
          <div className="bg-gray-300 rounded-xl shadow-2xl w-full max-w-xs aspect-4/5 flex items-center justify-center">
            <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 p-6 lg:p-8">
          <h1 className="text-2xl font-display font-bold text-primary mb-1">
            Créer un compte
          </h1>
          <p className="text-gray-500 text-sm mb-5">
            Rejoignez la communauté des entrepreneurs guinéens.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                <input
                  type="text"
                  {...register('firstName')}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Mamadou Cire"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input
                  type="text"
                  {...register('lastName')}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Diallo"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                {...register('email')}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="votre.email@exemple.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+224 6XX XXX XXX"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={`w-full px-4 py-2.5 pr-12 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer</label>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary py-3 text-base rounded-lg mt-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Création...' : 'Créer mon compte'}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-5 text-gray-600 text-sm">
            Déjà inscrit ?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
