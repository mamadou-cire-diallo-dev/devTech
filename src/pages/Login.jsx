import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff } from 'lucide-react'

// Zod Schema
const loginSchema = z.object({
  email: z.string().min(1, "L'email est requis").email('Email invalide'),
  password: z
    .string()
    .min(1, 'Le mot de passe est requis')
    .min(6, 'Minimum 6 caractères')
})

export default function Login () {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = data => {
    console.log('Login:', data)
    // Implement login logic
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-8'>
      <div className='bg-white rounded-2xl shadow-2xl flex max-w-4xl w-full overflow-hidden'>
        {/* Left - User Avatar Placeholder */}
        <div className='hidden lg:flex lg:w-1/2 bg-gray-200 items-center justify-center p-8'>
          <div className='bg-gray-300 rounded-xl shadow-2xl w-full max-w-xs aspect-4/5 flex items-center justify-center'>
            <svg
              className='w-32 h-32 text-gray-400'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
            </svg>
          </div>
        </div>

        {/* Right - Form */}
        <div className='flex-1 p-10 lg:p-12'>
          <h1 className='text-2xl font-display font-bold text-primary mb-3'>
            Bienvenue sur Entrepreneurs Guinée Connect
          </h1>
          <p className='text-gray-500 text-sm mb-8'>
            Connectez-vous pour accéder à votre espace personnalisé ou créez un
            compte.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            {/* Email */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Email
              </label>
              <input
                type='email'
                {...register('email')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='votre.email@exemple.com'
              />
              {errors.email && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Mot de passe
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder='••••••••'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full btn btn-primary py-3 text-base rounded-lg disabled:opacity-50'
            >
              {isSubmitting ? 'Connexion...' : 'Se connecter'}
            </button>

            {/* Forgot Password */}
            <div className='text-center'>
              <Link
                to='/forgot-password'
                className='text-sm text-primary hover:underline'
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </form>

          {/* Register Link */}
          <p className='text-center mt-6 text-gray-600 text-sm'>
            Pas encore de compte ?{' '}
            <Link
              to='/register'
              className='text-primary font-semibold hover:underline'
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
