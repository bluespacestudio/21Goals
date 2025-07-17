import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Card } from '../../components/ui'
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react'
import logo from '../../assets/logos/21Goals Icon Black.png'

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement login logic with Supabase
    console.log('Login attempt:', formData)
  }

  return (
    <div className="h-screen bg-gray-50 relative overflow-hidden">
      {/* Logo at top left */}
      <div className="absolute top-3 left-4 z-10">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="21Goals Logo"
            className="h-12 w-auto hover:opacity-80 transition-opacity duration-200"
            draggable="false"
          />
        </Link>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center h-full px-4">
        <div className="max-w-sm w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <LogIn className="w-6 h-6 text-secondary-500" />
              <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
            </div>
            <p className="text-gray-600 text-sm">
              Sign in to continue your 21Goals journey
            </p>
          </div>
          
          {/* Form Container */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                    required
                  />
                </div>
              </div>
              
              {/* Password */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Your password"
                    className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                    required
                  />
                </div>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg text-sm"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </button>
            </form>
            
            {/* Sign Up Link */}
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-xs">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center gap-1 transition-colors duration-200"
                >
                  <UserPlus className="w-3 h-3" />
                  Sign Up
                </Link>
              </p>
            </div>

            {/* Terms and Privacy */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500 leading-tight">
                By signing in, you agree to our{' '}
                <Link to="/terms-of-use" className="text-primary-600 hover:text-primary-700">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 